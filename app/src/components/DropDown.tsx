import React, { useState } from "react";
import { a, animated, useSpring } from "@react-spring/web";
/*
Dropdown menu that gets the options passed as props


EXAMPLE USAGE:
 <DropDown color="rgb(120,196, 234)" clickColor="rgb(124, 172, 203)">
<li> fist item </li>
<li>second item </li>
side note: if you use <ol>, it will act as if the button expanded into a list
*/

type Props = {
    color?: string;
    clickColor?: string;
    name: string;
    hoverColor?: string;
    hoverMode?: boolean;
    children?: React.ReactNode;
};
const DropDown = ({ color, clickColor, name, hoverMode = true, children }: Props) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const btn = useSpring({
        backgroundColor: isExpanded && clickColor ? clickColor : color || "transparent",
        transition: "background-color 1s ease-out ease-in",
        border: "none",
        borderRadius: "5px",
        right: isExpanded ? window.innerWidth - 300 : window.innerWidth,
        borderBottomRightRadius: isExpanded ? "0px" : "5px",
        borderBottomLeftRadius: isExpanded ? "0px" : "5px",
    });
    const style = useSpring({
        backgroundColor: isExpanded && clickColor ? clickColor : color || "transparent",
        borderTopRightRadius: isExpanded ? "0px" : "5px",
        borderTopLeftRadius: isExpanded ? "0px" : "5px",
        paddingRight: "5px",
        paddingLeft: "5px",
        width: "max-content",
        borderRadius: "5px",
        transition: "background-color 1s ease-in",
    });

    return (
        <a.div className="DropDown">
            <animated.button style={btn} onClick={() => setIsExpanded(!isExpanded)}>
                {name}
            </animated.button>
            <a.div style={style}>{isExpanded && <>{children}</>}</a.div>
        </a.div>
    );
};

export default DropDown;
