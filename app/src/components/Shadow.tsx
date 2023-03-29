/*
A shadow HOC that takes in optional props and casts a shadow behind a given component

EXAMPLE USAGE:
    <Shadow>
        <{component}/>
    </Shadow>
*/

import React from "react";

var values = {
    offsetX: 2,
    offsetY: 2,
    blur: 2,
    spread: 0.25,
    color: '#5A5A5A',
    padding: 5,
    borderRadius: 5,
}

type ShadowProps = {
    offsetX?: number;
    offsetY?: number;
    blur?: number;
    spread?: number;
    color?: string;
    children: React.ReactElement;
    borderRadius?: number,
}

const Shadow = (props: ShadowProps) => {
    var shadowStyle = {
        boxShadow: `${props.offsetX || values.offsetX}px ${props.offsetY || values.offsetY}px ${props.blur || values.blur}px ${props.spread || values.spread}px ${props.color || values.color}`,
        display: "flex",
        borderRadius: `${props.borderRadius || values.borderRadius}px`,
    }
    
    return (
        <div style={shadowStyle}>
            {props.children}
        </div>
    )
} 

export default Shadow;