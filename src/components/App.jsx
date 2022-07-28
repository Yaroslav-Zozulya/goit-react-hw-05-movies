import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
// import Layout from './Layout/Layout';
// import Home from './Home/Home';
// import MovieDetails from './MovieDetails/MovieDetails';
import Loader from './Loader/Loader';

const Home = lazy(() => import('./Home/Home'));
const Layout = lazy(() => import('./Layout/Layout'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="movies" element={<div>movies</div>} />
          <Route path="movies/:itemId" element={<MovieDetails />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
