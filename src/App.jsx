import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import HomePage from './Pages/HomePage/HomePage';

import {homePage} from "./Constants/routes";
import TopMenu from "./Components/TopMenu/TopMenu"
import Footer from "./Components/Footer/Footer"
import LeftMenu from "./Components/LeftMenu/LeftMenu";
import styles from './App.module.css'

const history = createBrowserHistory();

const App = () => {
    return (
        <Router history={history}>
            <div className={styles.app}>
                <LeftMenu/>
                <div>
                    <TopMenu/>
                    <div className='content'>
                        <Routes>
                            <Route path={homePage} element={<HomePage classname={styles.page}/>}/>
                        </Routes>
                    </div>
                    <Footer/>
                </div>
            </div>

        </Router>
    );
}

export default App;
