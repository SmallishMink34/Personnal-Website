import "../css/HomeContent.scss"
import "../css/TimeLine.css"
export function HomeContentFr() {
    return (
        <div className={"home-content"}>
            <div className={"Entete"}>
                <img className={"imageProfil"} src="./image.png" alt="map" />
                <div className={"textAboutMe"}>
                    <h1>Un Futur Developer De Logiciel</h1>
                    <div className={"Information"}>
                        <p><b>20 ans</b> <span> &emsp;/&emsp;</span> <b>Français</b> <span>&emsp;/&emsp;</span>
                            <b>Étudiant</b></p>
                    </div>
                    <p>Passionné d'informatique et de nouvelles technologies, je suis un étudiant en informatique à l'Université de Lorraine. Je suis actuellement en deuxième année de licence.</p>
                </div>
            </div>
            <div className={"AboutMe"}>
                <div>
                    <h1>A PROPOS DE MOI</h1>
                    <div className={"contentSkills"}>
                        <div className={"description"}>
                            <h3> <b>Salut ! Je m'appelle Moulias Matthéo</b></h3>
                            <p>Je suis actuellement un étudiant voulant devenir déveloper <br /> Mes connaissances ont été principalement acquises de manière autodidacte, en complément de mon apprentissage de l'informatique. Je possède une maîtrise dans divers langages de programmation, de balisage et déclaratifs, incluant le C/C++, Java, JavaScript, CSS et HTML, ainsi que PHP et SQL.</p>
                        </div>
                        <ul className={"Timeline"}>
                            <li>
                                <div className={"date"}>2019 - 2022</div>
                                <div className={"title"}><b>Lycée</b></div>
                                <div className={"descr"}>Georges Baumont <br /> J'ai commencé à apprendre les bases du dévelopment </div>
                            </li>
                            <li>
                                <div className={"date"}>2022 - 2023</div>
                                <div className={"title"}><b>Bac+1 en licence</b></div>
                                <div className={"descr"}>J'ai appris le C/C++ ainsi que l'algorithmie </div>
                            </li>
                            <li>
                                <div className={"date"}>2023 - 2024</div>
                                <div className={"title"}><b>Bac+2 en licence</b></div>
                                <div className={"descr"}>J'ai étudié le java et l'optimisation de la mémoire. </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}