const baseUrl = 'https://api.tvmaze.com/';

const getMovies = async () => {
  const response = await fetch(`${baseUrl}shows`)
    .then((response) => response.json())
    .then((data) => {
      const arrSliced = data.slice(0, 60);
      const newArr = arrSliced.map((movie) => {
        const container = {
          id: movie.id,
          name: movie.name,
          image: movie.image,
          end: movie.ended,
          rating: movie.rating,
          summary: movie.summary,
        };
        return container;
      });
      return newArr;
    });
  return response;
};

export default getMovies;