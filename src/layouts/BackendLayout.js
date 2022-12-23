import React from 'react';
import Header from 'backend/_partials/Header';
import Footer from 'backend/_partials/Footer';
import Sidebar from 'backend/_partials/Sidebar';

import 'assets/sass/backend/app.scss';

function BackendLayout({ children }) {
  return (
    <div className="app side__nav--open">
      <Sidebar />

      <div className="app__main">
        <div className="app__main__wrapper">
          <Header />

          <ol className="breadcrumb container-fluid">
            <li>
              <a href="/"><i className="bi bi-house"></i> Dashboard</a>
            </li>
            <li>
              <span className="separation">/</span>
            </li>
            <li>
              <span>User List</span>
            </li>
          </ol>

          <main className="app__content container-fluid">
            { children }
          </main>
        </div>

        <Footer />
      </div>


    </div>
  );
}

export default BackendLayout;
