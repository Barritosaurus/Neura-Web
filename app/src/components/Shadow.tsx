import React, { useState, useEffect, forwardRef } from "react";

interface ShadowProps {
    shadowColor?: string,
    shadowOffset?: {x: number; y: number },
    shadowOpacity?: number,
    shadowRadius?: number
}

const shadow = <P extends object>(Component: React.ComponentType<P>, {
    shadowColor = '#000000',
    shadowOffset = {x: 0, y: 2},
    shadowOpacity = 0.2,
    shadowRadius = 2,
}: ShadowProps = {}) => {
    const Shadow: React.FC<P> = (props) => {
        
        const shadow = {
            shadowColor,
            shadowOffset,
            shadowOpacity,
            shadowRadius,
            elevation: shadowRadius
        };

        return <Component {...(props as P)} style={[props, shadow]} />;
    };
    return Shadow;
}

export default shadow;