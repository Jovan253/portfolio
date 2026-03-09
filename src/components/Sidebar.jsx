import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faMedal, faCircleInfo, faPenRuler, faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Sidebar() {    
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="mobile-header">
                <FontAwesomeIcon className="menu-btn" onClick={() => setOpen(!open)} icon={faBars}/>
            </div>

            <aside className={`sidebar ${open ? "open" : ""}`}>

                <div className="logo">
                    Jovan Hadzic
                </div>

                <nav className="sidebar-nav">
                    <Link to="/" onClick={() => setOpen(false)}><FontAwesomeIcon icon={faPenRuler}/> Projects</Link>
                    <Link to="/about" onClick={() => setOpen(false)}><FontAwesomeIcon icon={faCircleInfo}/> About</Link>
                    <Link to="/certs" onClick={() => setOpen(false)}><FontAwesomeIcon icon={faMedal}/> Certifications</Link>
                    
                    <a href="https://github.com/Jovan253" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
                        <FontAwesomeIcon icon={faGithub}/> Github
                    </a>
                    <a href="https://www.linkedin.com/in/jovan-hadzic-6644321ba/" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
                        <FontAwesomeIcon icon={faLinkedin}/> Linkedin
                    </a>
                </nav>

            </aside>
        </>
    );
}