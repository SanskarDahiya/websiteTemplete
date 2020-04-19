import pymongo
from FlaskScripts.database.user_database import user
from FlaskScripts.database.blog_database import blog
myclient = {}
try:
    myclient = pymongo.MongoClient("mongodb://localhost:27017/")
    myclient.server_info()
    print('Database Connected')
except:
    print('Database Error')

mydb = myclient["jmitproject"]

user = user(mydb)  # use user for users interaction
blog = blog(mydb)  # use blog for blogs interaction
