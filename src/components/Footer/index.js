import "./style.css";
import {
    AiFillInstagram,
    AiFillLinkedin,
    AiFillGithub,
    AiOutlineCopyrightCircle,
} from "react-icons/ai";

const Footer = () => (
    <footer className="footer">
        <div className="footer-title">
            <h1
                className="footer-title"
                style={{ fontSize: "16px", color: "white" }}
            >
                <AiOutlineCopyrightCircle size={15} color="white" />
                2022 Vitor Duarte | Todos os direitos reservados
            </h1>
            <nav className="links-footer">
                <ul>
                    <a href="https://www.instagram.com/vitorduarte_s/">
                        <AiFillInstagram style={{ fontSize: "1.5rem" }} />
                    </a>
                    <a href="https://www.linkedin.com/in/vitor-duarte-dev/">
                        <AiFillLinkedin style={{ fontSize: "1.5rem" }} />
                    </a>
                    <a href="https://github.com/VitorDuarte0117">
                        <AiFillGithub style={{ fontSize: "1.5rem" }} />
                    </a>
                </ul>
            </nav>
        </div>
    </footer>
);
export default Footer;
