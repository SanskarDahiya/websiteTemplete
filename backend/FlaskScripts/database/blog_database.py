class blog:
    def __init__(self, _db):
        self.db = _db['blogs']

    def addblog(self, data):
        try:
            return self.db.insert_one(data).inserted_id
        except:
            return False

    def findblogs(self, key=False, value=''):
        try:
            output = self.db.find({key: value} if key else {})
            list = [x for x in output]
            # print(list)
            return list
        except:
            # print('err',e)
            return False
# myquery = { "address": "Valley 345" }
# newvalues = { "$set": { "address": "Canyon 123" } }

# mycol.update_one(myquery, newvalues)
    def updateblog(self, _id, newdata, force=False):
        try:
            # data = self.findblogs('_id', _id)[0]
            # if(not(data)):
            #     raise 'no blog found'
            self.db.update_one({"_id": _id}, {'$set': newdata})
            # for x in newdata:
            #     data[x] = newdata[x]
            # create new field if not available at force
            # if(force):
            #     if(l != len(data)):
            #         return False
            # self.db.replace_one({'_id': _id}, data)
            return True
        except:
            # print(e)
            return False
