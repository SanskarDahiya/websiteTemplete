from flask import *     # pylint: disable=unused-wildcard-import
from FlaskScripts.database.database import blog as blogDB
from FlaskScripts.database.database import user as userDB
from bson.objectid import ObjectId
import json
blogs = Blueprint('blogRoute', __name__, url_prefix='/blog')


@blogs.route("/singleblog", methods=['GET', 'POST'])
def singleblog():
    try:
        _id = str(request.args.get("_id")) or False
        if(not(_id)):
            return "Invalid Params, _id required"
        _id = ObjectId(_id)
        result = blogDB.findblogs('_id', _id)
        if(len(result) == 0):
            return 'No BLog Available for Given _Id'
        result = result[0]
        result['_id'] = str(result['_id'])
        return make_response({"result": result})
    except:
        return '/blog -- 500 -- Error'


@blogs.route("/allblogs", methods=['GET', 'POST'])
def allblogs():
    try:
        nresult = blogDB.findblogs()
        if(len(nresult) == 0):
            return 'No BLog Available '
        result = []
        for blog in nresult:
            blogn = blog
            blogn['_id'] = str(blogn['_id'])
            result.append(blogn)
        return make_response({"result": result})
    except:
        return '/blog -- 500 -- Error'


@blogs.route("/updateBlog", methods=['GET', 'POST'])
def updateBlogData():
    try:
        data = json.loads(request.data.decode())
        blog_id = data['_id']
        comments = data['comments']
        if(not(blog_id) and not(comments)):
            return 'MISSING PARAMS'
        blogDB.updateblog(ObjectId(blog_id), {"comments": comments})
        print(comments)
        return make_response({
            'result': 'Updation done'
        })
    except:
        return '/blog: Somthing Wrong--500'


@blogs.route("/insertBlog", methods=['GET', 'POST'])
def addBlogData():
    try:
        data = json.loads(request.data.decode())
        user_id = data['user']['_id']
        if(not(user_id)):
            return 'no userID given'
        userAvailable = userDB.finduser(
            "_id", ObjectId(user_id)) or [data['user']]
        if(len(userAvailable) == 0):
            return 'Invalid User'
        userAvailable = userAvailable[0]
        username = userAvailable['username']
        blogData = data['blog']
        if(not(blogData)):
            return 'Invalid Blog Data'
        blogData['author'] = username
        _id = str(blogDB.addblog(blogData)) or False
        if(not(_id)):
            return 'Unable to save into Database'
        return make_response({
            'result': _id
        })
    except:
        return '/blog: Somthing Wrong--500'
