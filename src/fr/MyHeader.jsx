import "../css/Header.css";
import  {Link} from "react-router-dom";
import {useEffect, useState} from "react";
export function MyHeaderFr(){
    const [isChecked, setIsChecked] = useState(false);
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };



    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 768) {
                setIsChecked(false);
            } else {
                setIsChecked(true);
            }
        }

        window.addEventListener('resize', handleResize);
        handleResize(); // Appel initial pour détecter la taille de l'écran au chargement de la page

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <div className={"HeaderAll"}>
            <div className={"menu-header"}>
                <h2>My Professional Journey</h2>

                <label className="hamburger">
                    <input type="checkbox" id="menuCheckbox" onChange={handleCheckboxChange} checked={isChecked}/>
                    <svg viewBox="0 0 32 32">
                        <path className="line line-top-bottom"
                              d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                        <path className="line" d="M7 16 27 16"></path>
                    </svg>
                </label>
            </div>
            <menu id={"nav-menu"} className={"nav-menu " + (isChecked ? "SmartMenu fadeIn" : "fadeOut ")}>
                <ul>
                    <Link to={"Personnal-Website/"}>Accueil</Link>
                    <Link to={"Personnal-Website/about"}><span>Mon Cv</span></Link>
                    <Link to={"Personnal-Website/projects"}>Projets</Link>
                </ul>
            </menu>
        </div>
    )
}

