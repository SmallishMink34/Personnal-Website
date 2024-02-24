import "./css/Header.css";

export function MyHeader(){
    return (
        <div className={"menu-header"}>
            <h2>Personnal Website</h2>

            <menu>
                <ul>
                    <a href="/">Home</a>
                    <a href="/about">Mon cv</a>
                    <a href="/projects">Projects</a>
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

