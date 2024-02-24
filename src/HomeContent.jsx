import "./css/HomeContent.scss"
import "./css/TimeLine.css"
export function HomeContent() {
    return (
        <div className={"home-content"}>
            <div className={"Entete"}>
                <img className={"imageProfil"} src="src/assets/image.png" alt="map" />
                <div className={"textAboutMe"}>
                    <h1>A Future Software developer</h1>
                    <div className={"Information"}>
                        <p><b>20 years</b> <span> &emsp;/&emsp;</span> <b>Student</b> <span>&emsp;/&emsp;</span>
                            <b>French</b></p>
                    </div>
                    <p>Passionate about computer science and new technologies, I'm a student in computer science at
                        the University of Lorraine. I'm currently in my second year of college.</p>
                </div>
            </div>
            <div className={"AboutMe"}>
                <div>
                    <h1>ABOUT ME</h1>
                    <div className={"contentSkills"}>
                        <div className={"description"}>
                            <h3> <b>Hi, i'm Moulias Matthéo</b></h3>
                            <p>I am a student and a future software developer. <br /> I have acquired most of my knowledge through self-learning while simultaneously pursuing studies in computer science. <br /> I am familiar with a multitude of programming, markup, and declarative languages such as C/C++, Java, JavaScript, CSS, and HTML, as well as PHP and SQL.</p>
                        </div>
                        <ul className={"Timeline"}>
                            <li>
                                <div className={"date"}>2014 - 2018</div>
                                <div className={"title"}><b>Secondary school</b></div>
                                <div className={"descr"}>Secondary school Andrée Malraux</div>
                            </li>
                            <li>
                                <div className={"date"}>2014 - 2018</div>
                                <div className={"title"}><b>Secondary school</b></div>
                                <div className={"descr"}>Secondary school Andrée Malraux</div>
                            </li>
                            <li>
                                <div className={"date"}>2014 - 2018</div>
                                <div className={"title"}><b>Secondary school</b></div>
                                <div className={"descr"}>Secondary school Andrée Malraux</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}