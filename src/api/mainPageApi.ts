import axios from "axios";

export const mainPagefetcher = async (page: number) => {
  const res = await axios.get("http://localhost:5000/main", {
    params: { page },
  });
  return res.data;
};
