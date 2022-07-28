import axios from 'axios';

const KEY = 'f954d1f327dcbc2e185dbd566025454c';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getTrendingMovies = async () => {
  const response = await axios.get(`/trending/all/day?api_key=${KEY}`);
  const trendingMovies = await response.data.results;
  return trendingMovies;
};

export const getMovieDetails = async id => {
  const response = await axios.get(
    `/movie/${id}?api_key=${KEY}&language=en-US`
  );

  const movieDetails = await response.data;
  return movieDetails;
};
