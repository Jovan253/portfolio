import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProjectCard({ project }) {
    const [hovered, setHovered] = useState(false);
    return (
        <a
            href={project.link}
            target="_blank"
            className="project-card"
            style={{ backgroundColor: hovered ? project.hoverColor : "#151515" }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            {hovered && (
                <div className="hover-icon">
                    <FontAwesomeIcon icon={project.hoverIcon} size="lg" />
                </div>
            )}
        </a>
    );
}