import axios from "axios";

export const mainPagefetcher = async () => {
  const res = await axios.get("http://localhost:5000/");
  return res.data;
};
