from flask import *     # pylint: disable=unused-wildcard-import
from FlaskScripts.blogRoute import blogs
import os
from flask_cors import CORS

app = Flask(__name__)
app.secret_key = os.urandom(24)
app.register_blueprint(blogs)

CORS(app)

@app.route("/")
def index():
    resp = make_response('THIS IS RUNNING')
    return resp


if __name__ == '__main__':
    app.run(debug=True)
