import axiosInstance from "./axiosInstance";

export const fetchStarships = () => {
  return axiosInstance
    .get("https://swapi.dev/api/starships/")
    .then(async (response) => {
      const resultsWithPilots = await Promise.all(
        response.data.results.map(async (starship) => {
          const pilotData = await Promise.all(
            starship.pilots.map(async (pilotUrl) => {
              const pilotResponse = await axiosInstance.get(pilotUrl);
              const pilotId = pilotUrl.split("/")[5];
              return {
                name: pilotResponse.data.name,
                image: `https://starwars-visualguide.com/assets/img/characters/${pilotId}.jpg`,
              };
            })
          );

          const filmData = await Promise.all(
            starship.films.map(async (filmUrl) => {
              const filmResponse = await axiosInstance.get(filmUrl);
              const filmId = filmUrl.split("/")[5];

              return {
                title: filmResponse.data.title,
                release_date: filmResponse.data.release_date,
                opening_crawl: filmResponse.data.opening_crawl,
                director: filmResponse.data.director,
                producer: filmResponse.data.producer,
                image: `https://starwars-visualguide.com/assets/img/films/${filmId}.jpg`,
              };
            })
          );

          return {
            ...starship,
            image: `https://starwars-visualguide.com/assets/img/starships/${starship.url.split("/")[5]}.jpg`,
            pilotData,
            filmData,
          };
        })
      );

      return {
        results: resultsWithPilots,
        next: response.data.next,
      };
    })
    .catch((error) => {
      console.error("Error fetching starships:", error);
      return { results: [], next: null };
    });
};

export const fetchStarshipById = async (id) => {
  try {
    const response = await axiosInstance.get(
      `https://swapi.dev/api/starships/${id}/`
    );
    const starship = response.data;

    const pilotData = await Promise.all(
      starship.pilots.map(async (pilotUrl) => {
        const pilotResponse = await axiosInstance.get(pilotUrl);

        const pilotId = pilotUrl.split("/")[5];

        return {
          name: pilotResponse.data.name,
          image: `https://starwars-visualguide.com/assets/img/characters/${pilotId}.jpg`,
        };
      })
    );

    return { ...starship, pilots: pilotData };
  } catch (error) {
    console.error("Error fetching starship by ID:", error);
    return {};
  }
};

export const fetchPilotByUrl = async (pilotUrl) => {
  try {
    const response = await axiosInstance.get(pilotUrl);
    const pilotId = pilotUrl.split("/")[5];

    return {
      name: response.data.name,
      image: `https://starwars-visualguide.com/assets/img/characters/${pilotId}.jpg`,
    };
  } catch (error) {
    console.error("Error fetching pilot:", error);
    return null;
  }
};
