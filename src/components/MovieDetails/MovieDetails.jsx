import { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import styled from 'styled-components';
import Loader from 'components/Loader/Loader';
import { getMovieDetails } from 'services/moviesApi';

const Link = styled(NavLink)`
  display: flex;
  gap: 10px;
`;

const MovieDetails = () => {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(false);
  const { itemId } = useParams();

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      setLoading(true);
      try {
        const itemData = await getMovieDetails(itemId);
        setItem(itemData);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchTrendingMovies();
  }, [itemId]);
  console.log(item);
  const { title, overview, poster_path, release_date } = item;

  return (
    <>
      {loading && <Loader />}
      <div>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : 'fuck you'
          }
          alt=""
        />

        <h1>
          {title} ({release_date && release_date.slice(0, 4)})
        </h1>
        <p></p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h2>Genres</h2>
        <p>
          {/* {item.genres.length > 0 ? (
            <p>{item.genres.map(genre => genre.name).join(', ')}</p>
          ) : (
            'not found'
          )} */}
        </p>
        <hr />
        <p>Additional information</p>
        <Link to="">Cast</Link>
        <Link to="">Reviews</Link>
        <hr />
      </div>
    </>
  );
};

export default MovieDetails;
