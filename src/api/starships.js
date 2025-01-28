import axiosInstance from "./axiosInstance";

export const fetchStarships = () => {
  return axiosInstance
    .get("https://swapi.dev/api/starships/")
    .then((response) => ({
      results: response.data.results.map((starship) => ({
        ...starship,
        image: `https://starwars-visualguide.com/assets/img/starships/${starship.url.split("/")[5]}.jpg`,
      })),
      next: response.data.next,
    }))
    .catch((error) => {
      throw error;
    });
};

export const fetchStarshipById = (id) => {
  return axiosInstance
    .get(`https://swapi.dev/api/starships/${id}/`)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};
