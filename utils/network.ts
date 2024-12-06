import axios from 'axios';
import { Blog } from '../src/App';

export const getBlogs = (setBlogs: (blogs: Blog[]) => void) => {
  axios
    .get('http://localhost:3001/blogs')
    .then((res: any) => {
      setBlogs(res.data);
    })
    .catch((err: any) => {
      console.log(err);
      alert('Something went wrong!');
    });
};

export const handleDelete = (id: string, setBlogs: (blogs: Blog[]) => void) => {
  axios
    .delete(`http://localhost:3001/blogs/${id}`)
    .then(() => {
      getBlogs(setBlogs);
    })
    .catch((err: any) => {
      console.log(err);
      alert('Something went wrong!');
    });
};
