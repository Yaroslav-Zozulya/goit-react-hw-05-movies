import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import { getMovieDetails } from 'services/moviesApi';

const MovieDetails = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const { itemId } = useParams();

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      setLoading(true);
      try {
        const itemsData = await getMovieDetails(itemId);
        setItems(itemsData);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchTrendingMovies();
  }, [itemId]);
  console.log(items);
  return (
    <>
      {loading && <Loader />}
      <div>movies details</div>
    </>
  );
};

export default MovieDetails;
