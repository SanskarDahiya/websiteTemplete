from flask import *     # pylint: disable=unused-wildcard-import
from FlaskScripts.usersRoute import users
from FlaskScripts.blogRoute import blogs
from FlaskScripts.database.database import user as userDB  # database

import os
import csv

app = Flask(__name__)
app.secret_key = os.urandom(24)

# all /user will redirect here
app.register_blueprint(users)
app.register_blueprint(blogs)




@app.route('/about')
def a2():
    return make_response(render_template("about.html"))


@app.route('/blogs')
def a4():
    return make_response(render_template("blog-single.html"))

# @app.route("/")
# def acd():
#     return "acd"

@app.route("/")
def index():
    data = [
        {
        'imageUrl': "images/bg_1.jpg",
        "title": "abbcd",
        "desc": " kuch hi",
        "button": [{
            "title": "123",
            "link": "/"
        }]
    }, {
        'imageUrl': "images/bg_1.jpg",
        "title": "abbcd",
        "desc": " kuch hi",
        "button": [{
            "title": "123",
            "link": "/"
        }]
    }, {
        'imageUrl': "images/bg_1.jpg",
        "title": "abbcd",
        "desc": " kuch hi",
        "button": [{
            "title": "123",
            "link": "/"
        },{
            "title": "123",
            "link": "/"
        }]
    }, {
        'imageUrl': "images/bg_1.jpg",
        "title": "abbcd",
        "desc": " kuch hi",
        "button": [{
            "title": "123",
            "link": "/"
        }]
    }, ]
    resp = make_response(render_template("index.html", headingImages=data))
    if(request.cookies.get('userid')):
        userdata = userDB.finduser(
            '_id', request.cookies.get('userid')) or False
        print('>>>', userdata)
        if(userdata):
            resp = make_response(render_template(
                "index.html", data=userdata[0]))
            return resp
    resp.set_cookie('userid', 'False', 0)
    return resp


if __name__ == '__main__':
    app.run(debug=True)
