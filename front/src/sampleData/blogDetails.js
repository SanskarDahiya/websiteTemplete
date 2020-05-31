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
    _id: "1",
    image: publicUrl + "/images/image_1.jpg",
    date: [26, "May", 2020],
    description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    title: "Skills To Develop Your Child Memory",
    comments: [],
    author: "ADMIN",
  },
  {
    image: publicUrl + "/images/image_1.jpg",
    date: [26, "May", 2020],
    _id: "2",
    description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    title: "Skills To Develop Your Child Memory",
    comments: [],
    author: "ADMIN",
  },
  {
    image: publicUrl + "/images/image_1.jpg",
    date: [26, "May", 2020],
    _id: "3",
    description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    title: "Skills To Develop Your Child Memory",
    comments: [],
    author: "ADMIN",
  },
  {
    image: publicUrl + "/images/image_1.jpg",
    date: [26, "May", 2020],
    _id: "4",
    description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    title: "Skills To Develop Your Child Memory",
    comments: [],
    author: "ADMIN",
  },
  {
    image: publicUrl + "/images/image_1.jpg",
    date: [26, "May", 2020],
    _id: "5",
    description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    title: "Skills To Develop Your Child Memory",
    comments: [],
    author: "ADMIN",
  },
  {
    image: publicUrl + "/images/image_1.jpg",
    date: [26, "May", 2020],
    _id: "6",
    description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    title: "Skills To Develop Your Child Memory",
    comments: [],
    author: "ADMIN",
  },
];
