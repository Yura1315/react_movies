import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { Outlet } from 'react-router-dom';
import './index.scss';

const PageWrapper = () => {
  return (
    <div className="layout">
      <Header />
      <main className="content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default PageWrapper;
