import React from "react";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import NavBar from "../components/NavBar";

function Landing() {
    const alignCenter = {
        display: 'flex',
        alignItems: 'center',
    }
    return (
        <div className="landing">
            <NavBar />

            <div className="landing-bg">

                <Parallax pages={3}>

                    <ParallaxLayer offset={0} speed={0.5} style={{...alignCenter, justifyContent: 'center'}}>
                        <div className="landing-text">
                            Neura Studios
                        </div>
                    </ParallaxLayer>

                    <ParallaxLayer offset={0.75} speed={1.5} style={{...alignCenter, justifyContent: 'center'}}>
                        <div className="landing-text">
                            Images/Videos
                        </div>
                    </ParallaxLayer>

                </Parallax>

            </div>

        </div>
    );
}

export default Landing;
