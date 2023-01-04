import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PageWrapper from './components/common/PageWrapper';
import MainContainer from './containers/MainContainer';
import Genres from './pages/Genres';
import MovieDetails from './pages/MovieDetails';
import Search from './pages/Search';

const App = () => (
  <Routes>
    <Route path="/" element={<PageWrapper />}>
      <Route index element={<MainContainer />} />
      <Route path="/search/:searchTerm" element={<Search />} />
      <Route path="/movies/:id" element={<MovieDetails />} />
      <Route path="/genres/:id" element={<Genres />} />
    </Route>
  </Routes>
);
export default App;
