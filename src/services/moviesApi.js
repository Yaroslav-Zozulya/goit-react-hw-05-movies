import axios from 'axios';

const KEY = 'f954d1f327dcbc2e185dbd566025454c';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getTrendingMovies = async () => {
  const response = await axios.get(`/trending/all/day?api_key=${KEY}`);
  return response.data.results;
};

export const getMovieDetails = async id => {
  const response = await axios.get(
    `/movie/${id}?api_key=${KEY}&language=en-US`
  );
  return response.data;
};
