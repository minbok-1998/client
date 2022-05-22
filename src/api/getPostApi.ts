import axios from "axios";

export const postfetcher = async (postId: string) => {
  const res = await axios.get(`http://localhost:5000/post/:${postId}`);
  return res.data;
};
