import { useState } from "react";
import { a, useSpring } from "@react-spring/web";
/*
A button component that takes in optional props and changes size when
hovered and clicked upon

EXAMPLE USAGE:
    <PopButton
        onClick={event/element}
        text="henlo"
        max = {1.5}
        min = {0.7)}
    />
 */

type Props = {
    max?: number;
    min?: number;
    onClick?: () => void;
    text: string;
};

const PopButton = ({ max = 2.0, min = 0.5, onClick, text }: Props) => {
    const [popupVisible, setPopupVisible] = useState(false);
    const [clicked, setClicked] = useState(false);
    const [hover, setHover] = useState(false);
    const minimum = "scale(" + min + ")  translateX(-50%) translateY(-50%) ";
    const maximum = "scale(" + max + ")";

    const handleClick = () => {
        console.log("button click!" + popupVisible);
    };
    const btn = useSpring({
        transform: clicked ? minimum : "scale(1.0) translateX(-25%) translateY(-25%) ",
    });
    const fade = useSpring({
        padding: "1.5ex",
        transition: "all .1s ",
        width: "2ex",
        height: "2ex",
        transform: popupVisible ? maximum : "scale(1.0)",
    });

    return (
        <a.div className="Button" style={fade}>
            <a.button
                style={btn}
                onMouseEnter={() => {
                    setHover(true);
                    setPopupVisible(true);
                    handleClick();
                }}
                onClick={() => {
                    if (hover) {
                        setPopupVisible(true);
                    }
                    setClicked(true);
                }}
                onMouseLeave={() => {
                    setHover(false);
                    setClicked(false);
                    setPopupVisible(false);
                }}
                onMouseDown={() => {
                    setPopupVisible(false);
                    setClicked(true);
                }}
                onMouseUp={() => {
                    setClicked(false);
                    setPopupVisible(true);
                    if (hover) {
                        setPopupVisible(true);
                    }
                }}
            >
                {text}
            </a.button>
        </a.div>
    );
};

export default PopButton;
