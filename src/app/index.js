// @vendors
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// @pages
import Home from '../components/pages/home';
import Galaxy from '../components/pages/galaxy';
import NotFound from '../components/pages/not-found';

// @utiles
import * as routes from '../utils/routes';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path={routes.HOME_ROUTE} element={<Home />} />
      <Route exact path={routes.GALAXY_ROUTE} element={<Galaxy />} />
      <Route path="*" element={<NotFound replace to="/" />} />
    </Routes>
  </BrowserRouter>
);

export default App;
