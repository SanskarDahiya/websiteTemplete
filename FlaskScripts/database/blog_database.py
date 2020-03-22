class blog:
    def __init__(self,_db):
        self.db = _db['blogs']

    def addblog(self,data):
        try:
            return self.db.insert_one(data).inserted_id
        except:
            return False

    def findblogs(self,key=False,value=''):
        try:
            output = self.db.find({key:value} if key else {})
            list = [x for x in output]
            # print(list)
            return list or False
        except Exception as e:
            # print('err',e)
            return False

    def updateblog(self,_id,newdata,force=False):
        try:
            data = self.finduser('_id',_id)[0]
            l = len(data)
            for x in newdata:
                data[x] = newdata[x]
            #create new field if not available at force
            if(force):
                if(l!=len(data)):
                    return False
            self.db.replace_one({ '_id':_id },data)
            return(data)
        except Exception as e:
            # print(e)
            return False
