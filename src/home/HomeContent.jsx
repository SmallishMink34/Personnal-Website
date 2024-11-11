import "../css/HomeContent.scss"
import "../css/TimeLine.css"
import "../css/animation.css"
import { useTranslation, Trans } from 'react-i18next';
export function HomeContent() {
    const { t } = useTranslation();
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
                    <h1>{t("HomePage.title")}</h1>
                    <div className={"Information"}>
                        <p><b>{t("HomePage.age")}</b> <span> &emsp;/&emsp;</span> <b>{t("HomePage.lang")}</b> <span>&emsp;/&emsp;</span>
                            <b>{t("HomePage.job")}</b></p>
                    </div>
                    <p>{t("HomePage.about")}</p>
                </div>
            </div>
            <div className={"AboutMe"}>
                <div>
                    <h1>{t("HomePage.aboutMe")}</h1>
                    <div className={"contentSkills"}>
                        <div className={"description"}>
                            <h3><b>{t("HomePage.desc")}</b></h3>
                            <p>{<Trans i18nKey="HomePage.desc2"/>}</p>
                        </div>
                        <ul className={"Timeline"}>
                            <li>
                                <div className={"date"}>2019 - 2022</div>
                                <div className={"title"}><b>{t("HomePage.timeline.first.name")}</b></div>
                                <div className={"descr"}>{<Trans i18nKey="HomePage.timeline.first.descr"/>}
                                </div>
                            </li>
                            <li>
                                <div className={"date"}>2022 - 2023</div>
                                <div className={"title"}><b>{t("HomePage.timeline.second.name")}</b></div>
                                <div className={"descr"}>{<Trans i18nKey="HomePage.timeline.second.descr"/>}</div>
                            </li>
                            <li>
                                <div className={"date"}>2023 - 2024</div>
                                <div className={"title"}><b>{t("HomePage.timeline.third.name")}</b></div>
                                <div className={"descr"}>{<Trans i18nKey="HomePage.timeline.third.descr"/>}</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}