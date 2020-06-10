import Axios from "axios";
const ServerUrl = "http://localhost:5000/blog/";
const publicUrl = process.env.PUBLIC_URL;
export var BLOGS = [];

const updateBLogs = async () => {
  const { data } = await Axios.get(ServerUrl + "allblogs");
  if (data && data.result) {
    BLOGS = data.result;
  }
};

export const insertBlog = async (blog) => {
  const resp = await Axios.post(ServerUrl + "insertBlog", blog);
  const { data } = resp;
  if (data.result) {
    return data.result;
  }

  throw new Error("-");
};

export const UpdateBlog = async (updatedValue) => {
  alert(updatedValue);
  await updateBLogs();
};

export const GETBLOGS = (limit = false) =>
  new Promise((res) => {
    try {
      updateBLogs().then(() => {
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
      });
    } catch (error) {
      res([]);
    }
  });
export const getSingleBlog = async (_id = false) => {
  const { data } = await Axios.get(ServerUrl + "singleblog?_id=" + _id);
  if (data.result) {
    return data.result;
  }
  alert(JSON.stringify(data));
};
