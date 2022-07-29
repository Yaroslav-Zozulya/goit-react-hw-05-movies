import { useState, useEffect } from 'react';
import { getMovieDetails } from 'services/moviesApi';
import { useParams } from 'react-router-dom';

export const useFetchItem = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState('');

  const { itemId } = useParams();

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      setLoading(true);
      try {
        const itemData = await getMovieDetails(itemId);
        setItem(itemData);
        setTitle(itemData.title);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchTrendingMovies();
  }, [itemId]);
  console.log(title);
  return { item, loading, title };
};
