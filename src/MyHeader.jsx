import "./css/Header.css";
import {Link} from "react-router-dom";

export function MyHeader(){
    return (
        <div className={"menu-header"}>
            <h2>My Professional Journey</h2>

            <menu>
                <ul>
                    <Link to={"Personnal-Website/"}>Home</Link>
                    <Link to={"Personnal-Website/about"}><span>My resume</span></Link>
                    <Link to={"Personnal-Website/projects"}>Projects</Link>
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
