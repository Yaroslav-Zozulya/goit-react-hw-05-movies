import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Loader from 'components/Loader/Loader';
import image from 'images/notFound.jpg';
import { useFetchItem } from 'hooks/useFetchItem';

const Link = styled(NavLink)`
  display: flex;
  gap: 10px;
`;

const MovieDetails = () => {
  const { item, loading, title } = useFetchItem();
  console.log(item);
  // const { title, overview, poster_path, release_date, genres } = item;
  // if (item) {
  //   console.log(item);
  //   const title = item.title;
  //   console.log(title);
  // }

  if (item) {
    console.log(`if item: ${item}`);
  }
  return (
    <>
      {loading && <Loader />}
      {item && (
        <div>
          <img
            src={
              item.poster_path
                ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
                : image
            }
            alt=""
          />

          <h1>
            {title} ({item.release_date && item.release_date.slice(0, 4)})
          </h1>
          <p></p>
          <h2>Overview</h2>
          <p>{item.overview}</p>
          <h2>Genres</h2>
          <div>
            {item.genres.length > 0 ? (
              <p>{item.genres.map(genre => genre.name).join(', ')}</p>
            ) : (
              <p>No genres found</p>
            )}
          </div>
          <hr />
          <p>Additional information</p>
          <Link to="">Cast</Link>
          <Link to="">Reviews</Link>
          <hr />
        </div>
      )}
    </>
  );
};

export default MovieDetails;
