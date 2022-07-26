import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
// import Layout from './Layout/Layout';
// import Home from './Home/Home';
// import MovieDetails from './MovieDetails/MovieDetails';
import Loader from './Loader/Loader';

const Home = lazy(() => import('./Home/Home'));
const Layout = lazy(() => import('./Layout/Layout'));
const MovieSearch = lazy(() => import('./MovieSearch/MovieSearch'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="movies" element={<MovieSearch />} />
          <Route path="movies/:itemId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
