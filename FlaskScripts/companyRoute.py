from flask import Blueprint, render_template, abort, request,session,redirect,g

companys = Blueprint('companyRoute', __name__, url_prefix='/company', template_folder='../templates')

@companys.route('/')
def index():
    return 'blogs Page'

d1="""We at Unthinkable Software are on the lookout for people who are passionate about building quality software products. In this regard, I am reaching out to you today to invite your college to register for our Campus Recruitment Program. At Unthinkable, we help our customers to disrupt faster by decreasing time-to-market via reducing the time gap between an idea and working software. Combining our experience of building 100+ software solutions and developing products using decoupled software components to reduce redundant code, we are in a unique position to take this unconventional approach to software development. Unthinkable is the software services brand of Applane Solutions LLP, and a group company of Daffodil Software."""
c1=["2017","DAFFODIL SOFTWARE LTD., GURUGRAM","http://www.unthinkable.co/","---","---,","WT/TR/HR","With in India","January","--- LPA","--- year"]
c2=["2018","DAFFODIL SOFTWARE LTD., GURUGRAM","http://www.unthinkable.co/","---","---","2WT/TR/HR","---","January","--- LPA","--- year"]
c3=["2019","DAFFODIL SOFTWARE LTD., GURUGRAM","http://www.unthinkable.co/",d1,"None","Tech Test(Online),Wrriten Test,TR,HR","Gurugram","January","4-5 LPA","1.5 year"]
C_List=[c1,c2,c3]
