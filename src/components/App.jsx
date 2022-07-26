import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from './Home/Home';
import MovieDetails from './MovieDetails/MovieDetails';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<div>movies</div>} />
        <Route path="movies/:itemId" element={<MovieDetails />} />
      </Route>
    </Routes>
  );
};
