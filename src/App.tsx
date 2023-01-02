import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PageWrapper from './components/common/PageWrapper';
import MainContainer from './containers/MainContainer';
import Login from './pages/Login/Login';
import Regist from './pages/Registrtion/Regist';

const App = () => (
  <Routes>
    <Route path="/" element={<PageWrapper />}>
      <Route index element={<MainContainer />} />
    </Route>
    <Route path='/signin' element={<Login />}>
    </Route>
    <Route path='/registr' element={<Regist />}></Route>
  </Routes>
);
export default App;
