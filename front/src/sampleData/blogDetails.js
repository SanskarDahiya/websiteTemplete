 import Axios from "axios";

const publicUrl = process.env.PUBLIC_URL;
 Axios.post("http://127.0.0.1:5000/blog/")
   .then(({ data: res }) => {
     console.log("AXIOS POSR", res);
   })
   .catch((res) => {
     console.log("AXIOS POSR", res);
   });
export const UpdateBlog = (updatedValue) => {
  alert(updatedValue);
};

export const GETBLOGS = (limit = false) =>
  new Promise((res) => {
    try {
      let blogs = BLOGS.filter((_, index) => {
        if (limit) {
          if (limit > index) {
            return true;
          }
          return false;
        }
        return true;
      });
      res(blogs);
    } catch (error) {
      res([]);
    }
  });
export const getSingleBlog = (_id = false) =>
  new Promise((res, rej) => {
    try {
      if (!_id) {
        rej("No Id");
        return;
      }
      let myblog = BLOGS[_id];
      if (myblog) {
        res({ ...myblog });
      } else {
        rej({});
      }
    } catch (err) {
      rej({});
    }
  });

export const BLOGS = [
  {
    _id: "0",
    image: publicUrl + "/images/test1.jpg",
    date: [1, "June", 2020],
    description: "eLearning, or electronic learning, is the delivery of learning and training through digital resources. Although eLearning is based on formalized learning, it is provided through electronic devices such as computers, tablets and even cellular phones that are connected to the internet. This makes it easy for users to learn anytime, anywhere, with few, if any, restrictions.",
    title: "ELearning",
    comments: [],
    author: "Sourav",
  },
  {
    image: publicUrl + "/images/test2.jpg",
    date: [28, "May", 2020],
    _id: "1",
    description: "I'm a member of what is likely a reasonably sizable informal group of people who trained to be a CEO but declined the job -- in my case, several times. So I don't envy the position that Twitter CEO Jack Dorsey is in as he tries to figure out a way to do the right thing concerning the spread of false information and defend his company against an attack by the designated leader of the free world.",
    title: "Jack Dorsey and the End of Twitter",
    comments: [],
    author: "Rob Enderle",
  },
  {
    image: publicUrl + "/images/test3.jpg",
    date: [25, "May", 2020],
    _id: "2",
    description: "These are extraordinary times, in case you haven't noticed. One of my contentions these days is that CRM is penetrating society to a point that it is taking on an outsized role, and I have called this the CRMification of society.In economics we often see a disruptive innovation climb a ladder as it becomes something that society needs, as well as wants, until it becomes essential. If you have a long time horizon you can look at the rise of electricity, telephone, water, sanitation services, natural gas delivery and cable, to name a few examples that have followed that path over the last 150 years. You also can point to the rapid rise of social media in the same vein, though I hesitate because all the other examples can be considered unalloyed goods. The jury is still out on social.",
    title: "CRM's K-Wave",
    comments: [],
    author: "Denis Pombriant",
  },
  {
    image: publicUrl + "/images/test4.jpg",
    date: [15, "May", 2020],
    _id: "3",
    description: "One of my great CRM research interests has been investigating how things change, and that interest is not limited to CRM. There is similar evolution in fields that seem only remotely related -- like climate change, which I've written about extensively. Generally, the change I find most interesting involves how disparate inventions seem to cluster with the help of innovators until the inventors reach critical masses of innovations that produce meaningful change in society. Often those critical masses seem to arrive just in time. In reality, the individual components might percolate in a society for years or even decades before coming together to produce what we now call a.",
    title: "Contact Tracing With Salesforce",
    comments: [],
    author: "Kunal",
  },
  {
    image: publicUrl + "/images/test5.jpg",
    date: [8, "May", 2020],
    _id: "4",
    description: "The GeekWire blog is where many modern geeks go to get wired with technology information in 2019. They present the most prominent tech industry news daily as well as some original content that may help you keep up to date with technology innovations impacting your business and personal life. You may also want to explore the resources tab for valuable information dedicated to companies and professionals in the tech field. Consider attending a GeekWire event for opportunities to discuss cutting-edge technological trends with industry experts. The events are also a great place to shop for content topic ideas that will appeal to your professional audience. You can give updated reports in true journalistic style if your audience appreciates any of the topics presented at upcoming events.",
    title: "GeekWire",
    comments: [],
    author: "Sanskar",
  },
  {
    image: publicUrl + "/images/test6.jpg",
    date: [2, "May", 2020],
    _id: "5",
    description: "BGR maintains a focus on mobile technology and consumer electronics. The site features a variety of timely topics that will help you understand the latest technology innovations while making smart tech choices in daily life. It’s one of the best tech blogs 2019 has to offer because the news updates, product reviews, and shopping deals are always relevant to a broad audience. If you don’t know much about technology right now, this is one of the best tech blogs to follow daily. You can keep up with tech news in less time by looking at the trending list featured on the front page of the BGR website at least once a day. It will give you a quick rundown of the current trends in exchange for a few moments of your time.",
    title: "BGR",
    comments: [],
    author: "Tanish",
  },
];
