import React, { useState, useEffect, useRef } from "react";
import IMAGES from "../images/images";

const backgrounds = [
    IMAGES.citypreview1,
    IMAGES.citypreview2,
    IMAGES.citypreview3,
    IMAGES.livingroompreview,
    IMAGES.livingroompreview2,
    IMAGES.diningroompreview,
];

const Backgrounds = () => {
    const [currentBackground, setCurrentBackground] = useState(0);
    const [loading, setLoading] = useState(true);
    const [prevBackground, setPrevBackground] = useState(backgrounds[2]);
    const [loaded, setLoaded] = useState(false);

    const backgroundRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const changeBackground = () => {
            setLoaded(false);
            setPrevBackground(backgrounds[currentBackground]);
            setCurrentBackground((prev) => (prev + 1) % backgrounds.length);
        };

        const timer = setInterval(changeBackground, 5000);
        return () => clearInterval(timer);
    }, [backgrounds, currentBackground]);

    useEffect(() => {
        const backgroundElement = backgroundRef.current;

        if (backgroundElement && loading) {
            backgroundElement.style.opacity = "0";
            backgroundElement.style.backgroundImage = `url(${backgrounds[currentBackground]})`;
            backgroundElement.style.transition = "opacity 0.5s ease-in-out";
            setTimeout(() => {
                backgroundElement.style.opacity = "1";
                setLoading(false);
            }, 0);
        }
    }, [currentBackground, loaded, loading, backgrounds]);

    const onLoad = () => {
        setLoaded(true);
    };

    return (
        <div
            ref={backgroundRef}
            className="moving-background"
            style={{
                backgroundImage: `url(${prevBackground})`,
                opacity: loading ? 0 : 1,
            }}
        >
            <img
                onLoad={onLoad}
                src={backgrounds[currentBackground]}
                style={{ display: "none" }}
                alt=""
            />
        </div>
    );
};

export default Backgrounds;
