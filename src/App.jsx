import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import HomePage from './Pages/HomePage/HomePage';

import {homePage} from "./Constants/routes";
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"

const history = createBrowserHistory();

const App = () => {
  return (
    <Router history={history}>
      <Header />
      <div className='content'>
        <Routes>
          <Route path={homePage} element={<HomePage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
