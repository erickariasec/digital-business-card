import profilePicture from "../assets/profile-erick-arias.jpg";
import linkedinLogo from "../assets/linkedin.png";
import mailLogo from "../assets/mail.png";
import "./Header.css"

function Header() {
    return (
        <header>
            <img className="profile-picture" src={profilePicture} width="300" alt="Erick Arias Profile Picture" />
            <article className="personal-information">
                <h2 className="name">Erick Arias</h2>
                <p className="profession">Frontend Developer</p>
                <a className="web" href="https://erickariasec.github.io/" target="_blank">erickariasec.github.io</a>
            </article>
            <section className="buttons">
                <a className="button-left" href="mailto: erickarias1999@hotmail.com" target="_blank">
                    <img className="logo-button" src={mailLogo} />
                    <p>Email</p>
                </a>
                <a className="button-right" href="https://www.linkedin.com/in/erickariasec/" target="_blank">
                    <img className="logo-button" src={linkedinLogo} />
                    <p>LinkedIn</p>
                </a>
            </section>
        </header>
    );
}

export default Header;