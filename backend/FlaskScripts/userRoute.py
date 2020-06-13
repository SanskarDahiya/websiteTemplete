from flask import *     # pylint: disable=unused-wildcard-import
from FlaskScripts.database.database import user as userDB
import json
import hashlib
users = Blueprint('userRoute', __name__, url_prefix='/user')

# z = {
#     'hi': "okay",
#     "name": False,
#     "mn": 123
# }


# @users.route("/", methods=['GET', 'POST'])
# def showBlogData():
#     try:
#         response = make_response("This is user")
#         return response
#     except:
#         return '/blog: Somthing Wrong'


#
# sample call
#   http://localhost:5000/user/insertUser?username=sourav&password=123456789
#
@users.route("/insertUser", methods=['GET', 'POST'])
def insertUser():
    try:
        username = str(request.args.get('username')) or False
        password = str(request.args.get('password')) or False
        if(not(username) or not(password) or len(username) == 0 or len(password) == 0):
            return make_response({
                "result": 'Invalid arguments are given'
            })

        usernameAvailable = userDB.finduser("username", username)
        if(usernameAvailable and len(usernameAvailable) != 0):
            return make_response({
                "result": 'UserName already taken'
            })
        encPassword = hashlib.md5(str(password).encode())
        encPassword = str(encPassword.hexdigest())
        insertData = {
            "username": username,
            "password": encPassword
        }
        _id = userDB.adduser(insertData) or False
        return make_response({
            "_id": str(_id),
            "username": username,
            "Encrypt Password": encPassword,
            "status": "Created"
        })
    except Exception as e:
        resp = {
            "status": "Error",
            "Error": e
        }
        return make_response(json.dumps(resp))

#
# sample call
#   http://localhost:5000/user/validateUser?username=admin&password=123456789
#
@users.route("/validateUser", methods=['GET', 'POST'])
def validateUser():
    try:
        username = str(request.args.get('username')) or False
        password = str(request.args.get('password')) or False
        if(not(username) or not(password) or len(username) == 0 or len(password) == 0):
            return make_response({
                "result": 'Invalid arguments are given'
            })
        userAvailable = userDB.finduser("username", username)
        userAvailable = (userAvailable and userAvailable[0]) or False
        if(not(userAvailable)):
            return make_response({
                "result": "Invalid Username"
            })
        encPassword = hashlib.md5(str(password).encode())
        encPassword = str(encPassword.hexdigest())
        print(encPassword, userAvailable, userAvailable['_id'], '<<<')
        if(encPassword == userAvailable['password']):
            return make_response({
                "_id": str(userAvailable["_id"]),
                "username": userAvailable['username']
            })
        return make_response({
            "result": "Wrong Password"
        })
    except Exception as e:
        print(e)
        return {
            "result": "Have Error at server"
        }
