import React, { useState } from "react";

/*
A button component that takes in optional props and changes color when
hovered upon

EXAMPLE USAGE:
    <HoverButton 
        onClick={event/element}
        text="henlo"
        color="rgb(120, 196, 234)"
        hoverColor="rgb(124, 172, 203)"
    />
 */

interface Props {
    onClick?: () => void;
    text?: string;
    color?: string;
    hoverColor?: string;
}

const HoverButton: React.FC<Props> = ({ onClick, text, color, hoverColor }) => {
    const [isHovered, setIsHovered] = useState(false);

    const style = {
        backgroundColor: isHovered && hoverColor ? hoverColor : color || "transparent",
        border: "none",
    };

    const handleClick = () => {
        console.log("button click!");
    };

    return (
        <div className="HoverButton">
            <button
                onClick={onClick ? onClick : handleClick}
                style={style}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {text}
            </button>
        </div>
    );
};

export default HoverButton;
