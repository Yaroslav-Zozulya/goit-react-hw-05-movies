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

export const getMovieCredits = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}/credits?api_key=${KEY}&language=en-US`
  );
  const movieCredits = await response.data;
  return movieCredits;
};

export const getMovieReviews = async movieId => {
  const response = await axios.get(`/movie/${movieId}/reviews?api_key=${KEY}`);
  const movieReviews = await response.data;
  return movieReviews;
};

export const fetchMovieByName = async (movieName, page) => {
  const response = await axios.get(
    `search/movie?api_key=${KEY}&page=${page}&language=en&query=${movieName}`
  );
  const searchMoviesData = await response.data.results;
  return searchMoviesData;
};
