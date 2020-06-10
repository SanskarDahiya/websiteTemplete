from flask import *     # pylint: disable=unused-wildcard-import
from FlaskScripts.blogRoute import blogs
from FlaskScripts.userRoute import users
import os
from flask_cors import CORS

app = Flask(__name__)

app.secret_key = os.urandom(24)

app.register_blueprint(blogs)
app.register_blueprint(users)

CORS(app)

@app.route("/run")
def index():
    resp = make_response('THIS IS RUNNING SERVER')
    return resp


if __name__ == '__main__':
    app.run(debug=True)
