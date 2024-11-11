import './App.scss'
import './css/backgroundRadiant.css'
import { MyHeader } from "./MyHeader.jsx";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';


import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import i18next from './i18n';
import {HomePage} from "./home/HomePage.jsx";
import {ProjectPage} from "./projects/ProjectPage.jsx";
import { MyFooter } from './MyFooter.jsx';
import { Resume } from './resume/Resume.jsx';


function App() {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
      };


    useEffect(() => {
        i18next.init();
      }, []);

    return (
        <Router>
            <div className={`App`}>
                <MyHeader/>

                <Routes>
                    <Route path="Personnal-Website/home" element={<HomePage/>}/>
                    <Route path="Personnal-Website/resume" element={<Resume/>}/>
                    <Route path="Personnal-Website/projects" element={<ProjectPage/>}/>
                    <Route path="Personnal-Website/" element={<Navigate to="/Personnal-Website/home" />} />
                </Routes>
                <MyFooter/>
            </div>
        </Router>
    )
}

export default App
