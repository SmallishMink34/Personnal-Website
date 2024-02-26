import "../css/Header.css";
import  {Link} from "react-router-dom";
export function MyHeaderFr(){
    return (
        <div className={"menu-header"}>
            <h2>My Professional Journey</h2>

            <menu>
                <ul>
                    <Link to={"Personnal-Website/"}>Accueil</Link>
                    <Link to={"Personnal-Website/about"}>Mon cv</Link>
                    <Link to={"Personnal-Website/projects"}>Projets</Link>
                </ul>
            </menu>
            <div className={"menu-button"}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}

