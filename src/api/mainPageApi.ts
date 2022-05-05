import axios from "axios";

export const MainPagefetcher = async () => {
  const res = await axios.get("http://localhost:5000/");
  return res.data;
};
