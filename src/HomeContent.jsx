import "./css/HomeContent.scss"
export function HomeContent() {
    return (
        <div className={"gradient-border home-content"}>
            <div className={"aboutMe"}>
                <img className={"imageProfil"} src="src/assets/image.png" alt="map" />
                <div className={"textAboutMe"}>
                    <h1>About Me</h1>
                    <div className={"Information"}>
                        <p><b>20 years</b> <span> &emsp;/&emsp;</span> <b>Student</b> <span>&emsp;/&emsp;</span>
                            <b>French</b></p>
                    </div>
                </div>
            </div>
        </div>
    );
}