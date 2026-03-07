import { useState } from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function WorkIcon() {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className="work-icon"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <FontAwesomeIcon icon={faBriefcase} size="24px"/>
            {hovered && (
                <div className="tooltip">
                    Technology Associate at Synechron
                </div>
            )}
        </div>
    );
}