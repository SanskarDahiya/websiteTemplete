from flask import *  # pylint: disable=unused-wildcard-import
from FlaskScripts.database.database import user as userDB  # database

users = Blueprint('usersRoute', __name__, url_prefix='/user',
                  template_folder='../templates')


@users.route('/')
def index():
    return render_template("Home.html")


@users.route('/add', methods=['GET', 'POST'])
def adduser():
    try:
        z = '/add> '
        data = dict(request.form)
        if not(userDB.finduser('email', data['email'])):
            #email is available
            id = userDB.adduser(data)
            resp = make_response(redirect('/'))
            resp.set_cookie('userid', str(id), 60*60)  # 1 hour cookie timing
            return resp
        return "<script>alert('Email Already Registered');location.href='/';</script>"
    except:
        return "<script>alert('Something Went Wrong');location.href='/';</script>"


@users.route('/getdetails', methods=['POST'])
def show():
    try:
        data = dict(request.form)
        emailValid = userDB.finduser('email', data['email']) or False
        if emailValid:
            emailValid = emailValid[0]
            # print('>>>validemail',emailValid)
            if(data['password'] == emailValid['password']):
                resp = make_response(redirect('/'))
                resp.set_cookie('userid', str(emailValid['_id']), 60*60)
                return resp
            else:
                return "<script>alert('Incorrect Password');location.href='/';</script>"
        return "<script>alert('Email Not Found');location.href='/';</script>"
    except Exception as e:
        print('errr>>>>>', e)
        return "<script>alert('Something Went Wrong');location.href='/';</script>"
