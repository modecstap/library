import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import HomePage from './Pages/HomePage/HomePage';
import BookPage from './Pages/BookPage/BookPage';

import {bookPage, homePage} from "./Constants/routes";
import styles from './App.module.css'

const history = createBrowserHistory();

const App = () => {
    return (
        <Router history={history}>
            <div className={styles.background}>
                <div className={styles.app}>
                    <Routes>
                        <Route path={bookPage} element={<BookPage classname={styles.page}/>}/>
                        <Route path={homePage} element={<HomePage classname={styles.page}/>}/>
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
