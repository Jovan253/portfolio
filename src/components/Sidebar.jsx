import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faMedal, faCircleInfo, faPenRuler } from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {    
    return (
        <aside className="sidebar">

            <div className="logo">
                Jovan Hadzic
            </div>

            <nav className="sidebar-nav">
                <Link to="/"><FontAwesomeIcon icon={faPenRuler}/> Projects</Link>
                <Link to="/"><FontAwesomeIcon icon={faCircleInfo}/> About</Link>
                <Link to="/"><FontAwesomeIcon icon={faMedal}/> Certifications</Link>
                
                <a href="https://github.com/Jovan253" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub}/> Github
                </a>
                <a href="https://www.linkedin.com/in/jovan-hadzic-6644321ba/" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faLinkedin}/> Linkedin
                </a>
            </nav>

        </aside>
    );
}