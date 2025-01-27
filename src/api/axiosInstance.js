import axios from "axios";

const axiosInstance = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

// Fetch data from a dynamic URL
export const fetchData = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

export default axiosInstance;
