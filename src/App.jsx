import './App.scss'
import './css/backgroundRadiant.css'
import { MyHeader } from "./MyHeader.jsx";
import { MyHeaderFr } from "./fr/MyHeader.jsx";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { useState } from "react";
import {HomePage} from "./HomePage.jsx";
import {ProjectPage} from "./projects/ProjectPage.jsx";

function App() {
    const [isComponentASelected, setIsComponentASelected] = useState(true);

    const handleToggleComponent = () => {
        setIsComponentASelected(!isComponentASelected);
        console.log(isComponentASelected);
    };


    return (
        <Router>
            <div className={`App`}>
                <button onClick={handleToggleComponent} style={{position: "fixed", bottom: "0", right: "0", zIndex: 1000, padding: "10px", margin: "10px", backgroundColor: "red", borderRadius: "10px", border: "none", cursor: "pointer"}}>Switch language</button>
                {isComponentASelected ? <MyHeader/>: <MyHeaderFr/>}

                <Routes>
                    <Route path="Personnal-Website/" element={<HomePage isComponentASelected={isComponentASelected} />}/>
                    <Route path="Personnal-Website/about" element={<HomePage isComponentASelected={isComponentASelected} />}/>
                    <Route path="Personnal-Website/projects" element={<ProjectPage/>}/>
                </Routes>
            </div>
        </Router>
    )
}

export default App
