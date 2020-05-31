from flask import *     # pylint: disable=unused-wildcard-import
from FlaskScripts.database.database import blog as blogDB

blogs = Blueprint('blogRoute', __name__, url_prefix='/blog')

z = {
    'hi': "okay"
}


@blogs.route("/", methods=['GET', 'POST'])
def showBlogData():
    try:
        response = make_response(z)
        return response
    except:
        return '/blog: Somthing Wrong'


@blogs.route("/singleblog", methods=['GET', 'POST'])
def singleblog():
    cstmId = int(request.args.get("id") or 0)
    return make_response('single blog')


@blogs.route("/addtoblog", methods=['GET', 'POST'])
def addBlogData():
    try:
        return 'okay'
    except:
        return '/blog: Somthing Wrong'
