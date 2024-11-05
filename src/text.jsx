import React from 'react';

const header = (level, text, scheme) => {
    const tag = `h${ Math.min(Math.max(level, 1), 6) }`;
    
    const colorStyle   = scheme[1].includes('gradient') ? { background: color }   : { color: color };
    const bgColorStyle = scheme[0].includes('gradient') ? { background: bgColor } : { backgroundColor: bgColor };
    
    return React.createElement(
        tag,
        {
            style: {
                fontFamily: scheme[4],
                border: scheme[3],
                borderRadius: scheme[5],
                ...colorStyle,
                ...bgColorStyle,
            },
        },
        text
    );
}

const paragraph = (text, scheme) => {
    const tag = 'p';
    
    const colorStyle   = scheme[1].includes('gradient') ? { background: color }   : { color: color };
    const bgColorStyle = scheme[0].includes('gradient') ? { background: bgColor } : { backgroundColor: bgColor };

    return React.createElement(
        tag,
        {
            style: {
                fontFamily: scheme[4],
                border: scheme[3],
                borderRadius: scheme[5],
                ...colorStyle,
                ...bgColorStyle,
            },
        },
        text
    );
}