import twitterIcon from "../assets/twitter-icon.png";
import facebookIcon from "../assets/facebook-icon.png";
import instagramIcon from "../assets/instagram-icon.png";
import githubIcon from "../assets/github-icon.png";
import "./Footer.css"

function Footer() {
    return (
        <footer>
            <a href="https://twitter.com/ErickAriasEc" target="_blank"><img src={twitterIcon} alt="Twitter - Erick Arias" /></a>
            <a href="https://www.facebook.com/erickariasec" target="_blank"><img src={facebookIcon} alt="Facebook - Erick Arias" /></a>
            <a href="https://www.instagram.com/erickariasec/" target="_blank"><img src={instagramIcon} alt="Instagram - Erick Arias" /></a>
            <a href="https://github.com/erickariasec" target="_blank"><img src={githubIcon} alt="GitHub - Erick Arias" /></a>
        </footer>
    );
}

export default Footer;