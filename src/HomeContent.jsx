import "./css/HomeContent.scss"
import "./css/TimeLine.css"
import "./css/animation.css"
export function HomeContent() {
    return (
        <div className={"home-content"}>

            <div className={"Entete wave"}>
                <div className={"ImageContainer"}>
                    <div className={"Decoratif-Element"}></div>
                    <div className={"Decoratif-Element-second"}></div>
                    <img className={"imageProfil"} rel="preload" src='./image.png'
                         alt="Selfie"/>
                    <div className="gradient-overlay">
                    </div>

                </div>
                <div className={"textAboutMe"}>
                    <h1>A Future Software developer</h1>
                    <div className={"Information"}>
                        <p><b>20 years</b> <span> &emsp;/&emsp;</span> <b>French</b> <span>&emsp;/&emsp;</span>
                            <b>Student</b></p>
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
                            <h3><b>Hi, i'm Moulias Matthéo</b></h3>
                            <p>I am currently a student with aspirations of becoming a software developer. <br/> My
                                knowledge has been predominantly self-acquired, alongside my formal education in
                                computer science. <br/> I possess proficiency in various programming, markup, and
                                declarative languages including C/C++, Java, JavaScript, CSS, and HTML, as well as PHP
                                and SQL.</p>
                        </div>
                        <ul className={"Timeline"}>
                            <li>
                                <div className={"date"}>2019 - 2022</div>
                                <div className={"title"}><b>High school</b></div>
                                <div className={"descr"}>Georges Baumont <br/> I have started learning the basics of
                                    development.
                                </div>
                            </li>
                            <li>
                                <div className={"date"}>2022 - 2023</div>
                                <div className={"title"}><b>First years of University</b></div>
                                <div className={"descr"}>FST Vandoeuvres-les-nancy <br/>I have learned C/C++ and started with algorithmics.</div>
                            </li>
                            <li>
                                <div className={"date"}>2023 - 2024</div>
                                <div className={"title"}><b>Second years of University</b></div>
                                <div className={"descr"}>FST Vandoeuvres-les-nancy <br/>I learn java and some memories optimizations.</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}