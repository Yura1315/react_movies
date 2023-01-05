import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AuthWrapper from './components/AuthWrapper';
import PageWrapper from './components/common/PageWrapper';
import AuthHoc from './components/HOC';
import AuthContainer from './containers/AuthContainer';
import FavoritesContainer from './containers/FavoritesContainer';
import MainContainer from './containers/MainContainer';
import RegContainer from './containers/RegContainer';

const App = () => (
  <Routes>
    <Route path="/" element={<PageWrapper />}>
      <Route index element={<MainContainer />} />
      <Route path="login/" element={<AuthWrapper />}>
        <Route path="reg" element={<RegContainer />} />
        <Route path="auth" element={<AuthContainer />} />
      </Route>
      <Route
        path="favorites"
        element={
          <AuthHoc>
            <FavoritesContainer />
          </AuthHoc>
        }
      />
    </Route>
  </Routes>
);
export default App;
