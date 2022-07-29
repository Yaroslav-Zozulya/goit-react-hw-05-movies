import { NavLink, useParams } from 'react-router-dom';
import styled from 'styled-components';
import Loader from 'components/Loader/Loader';
import image from 'images/notFound.jpg';
import { useFetchItem } from 'hooks/useFetchItem';

const Link = styled(NavLink)`
  display: flex;
  gap: 10px;
`;

const MovieDetails = () => {
  const { item, loading } = useFetchItem();
  console.log(item);
  // const { title, overview, poster_path, release_date, genres } = item;

  // const poster = poster_path
  //   ? `https://image.tmdb.org/t/p/w500${poster_path}`
  //   : image;

  // const itemOverview = overview || `We don't have information 🙄`;

  return (
    <>
      {/* {loading && <Loader />}
      <div>
        <img src={poster} alt="" />

        <h1>
          {title} ({release_date && release_date.slice(0, 4)})
        </h1>
        <p></p>
        <h2>Overview</h2>
        <p>{itemOverview}</p>
        <h2>Genres</h2> */}
      {/* <div>
          {genres.length > 0 ? (
            <p>{genres.map(genre => genre.name).join(', ')}</p>
          ) : (
            <p>No genres found</p>
          )}
        </div> */}
      {/* <hr />
        <p>Additional information</p>
        <Link to="">Cast</Link>
        <Link to="">Reviews</Link>
        <hr />
      </div> */}
    </>
  );
};

export default MovieDetails;
