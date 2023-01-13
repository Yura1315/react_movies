import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PageWrapper from './components/common/PageWrapper';
import MainContainer from './containers/MainContainer';
import Login from './pages/Login/Login';
import Regist from './pages/Registrtion/Regist';
import Genres from './pages/Genres';
import MovieDetails from './pages/MovieDetails';
import Search from './pages/Search';
import HistoryContainer from './containers/HistoryContainer';
import AuthHoc from './components/HOC/AuthHoc';
import Favorities from './pages/Favorities/Favorities';

const App = () => (
  <Routes>
    <Route path="/" element={<PageWrapper />}>
      <Route index element={<MainContainer />} />
      <Route path="/search/:searchTerm" element={<Search />} />
      <Route path="/movies/:id" element={<MovieDetails />} />
      <Route path="/genres/:name/:id" element={<Genres />} />
      <Route
        path="history"
        element={<AuthHoc>
          <HistoryContainer />
        </AuthHoc>
        }
      />
      <Route path="/favorites" element={<AuthHoc><Favorities /></AuthHoc>}></Route>
      <Route path="/signin" element={<Login />}></Route>
      <Route path="/registr" element={<Regist />}></Route>
    </Route>
  </Routes>
);
export default App;
