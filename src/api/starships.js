import axiosInstance from "./axiosInstance";

export const fetchStarships = () => {
  return axiosInstance
    .get("starships/")
    .then((response) => response.data.results)
    .catch((error) => {
      throw error;
    });
};

export const fetchStarshipById = (id) => {
  return axiosInstance
    .get(`starships/${id}/`)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};
