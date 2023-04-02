/*
A button component that takes in optional props and changes color when
hovered upon

    *   redirects are best handled with the useNavigate hook from react-router-dom

EXAMPLE USAGE:
    <HoverButton 
        onClick={event/element}                 //what button should do when clicked
        text="henlo"                            //text for button
        color="rgb(120, 196, 234)"              //button's border color
        hoverColor="rgba(124, 172, 203, 0.2)"   //button's hover color
    />
*/

import React, { useState } from "react";

interface HoverButtonProps {
    onClick?: () => void;
    text?: string;
    color?: string;
    hoverColor?: string;
    link?: string;
}

const HoverButton: React.FC<HoverButtonProps> = ({ onClick, text, color, hoverColor, link }) => {
    const [isHovered, setIsHovered] = useState(false);

    const style = {
        backgroundColor: isHovered && hoverColor ? hoverColor : "transparent" || "transparent",
        borderColor: color ? color : 'black' || 'black',
        width: "100%",
        height: "100%",
        padding: "3px 6px",
        borderRadius: "5px",
    };

    const handleClick = () => {
        console.log("button click!");
    };

    return (
            <button
                className="hover-button"
                onClick={onClick ? onClick : handleClick}
                style={style}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {text}
            </button>
    );
};

export default HoverButton;
