from flask import *     # pylint: disable=unused-wildcard-import
from FlaskScripts.database.database import blog as blogDB

blogs = Blueprint('blogRoute', __name__, url_prefix='/blog',
                  template_folder='../templates')

myblog = [
    {
        "_id": "1",
        "image": "images/image_1.jpg",
        "date": [26, 'June', 2019],
        "title":"Skills To Develop Your Child Memory",
        "desc":"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
        "uploadedBy":{
            "name": "Admin",
            "_id": "123",
        },
        "comments":['12','34']
    },{
        "_id": "1",
        "image": "images/image_1.jpg",
        "date": [26, 'June', 2019],
        "title":"Skills To Develop Your Child Memory",
        "desc":"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
        "uploadedBy":{
            "name": "Admin",
            "_id": "123",
        },
        "comments":['12','34']
    },{
        "_id": "1",
        "image": "images/image_1.jpg",
        "date": [26, 'June', 2019],
        "title":"Skills To Develop Your Child Memory",
        "desc":"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
        "uploadedBy":{
            "name": "Admin",
            "_id": "123",
        },
        "comments":['12','34']
    },{
        "_id": "1",
        "image": "images/image_1.jpg",
        "date": [26, 'June', 2019],
        "title":"Skills To Develop Your Child Memory",
        "desc":"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
        "uploadedBy":{
            "name": "Admin",
            "_id": "123",
        },
        "comments":['12','34']
    },{
        "_id": "1",
        "image": "images/image_1.jpg",
        "date": [26, 'June', 2019],
        "title":"Skills To Develop Your Child Memory",
        "desc":"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
        "uploadedBy":{
            "name": "Admin",
            "_id": "123",
        },
        "comments":['12','34']
    },
]
@blogs.route("/")
def showBlogData():
    return make_response(render_template("blog.html", blogs=myblog))

    # try:
    #     allblogs = blogDB.findblogs()
    #     return render_template("blog.html",data = allblogs)
    #     # return 'Blogs are>> '+str(allblogs)
    # except:
    #     return '/blog: Somthing Wrong'


@blogs.route("/addtoblog", methods=['GET', 'POST'])
def addBlogData():
    try:
        if request.method == 'POST':
            data = dict(request.form)
            data['name'] = 'username'
            data['email'] = 'Email'
            data['date'] = 'Data-2020'
            data = blogDB.addblog(data)
            return redirect('/blog')
    except:
        return '/blog: Somthing Wrong'
