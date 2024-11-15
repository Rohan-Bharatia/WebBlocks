import React from 'react';

const title = (text, scheme) => {
    const tag = 'title';

    return React.createElement(
        tag,
        {
            style: {
                fontFamily: scheme[4],
                border: scheme[3],
                borderRadius: scheme[5],
                borderColor: colorStyle,
                ...colorStyle,
                ...bgColorStyle
            }
        },
        text
    );
}

const header = (level, text, scheme) => {
    const tag = `h${ Math.min(Math.max(level, 1), 6) }`;
    
    const colorStyle   = scheme[2].includes('gradient') ? { background: color }   : { color: color };
    const bgColorStyle = scheme[0].includes('gradient') ? { background: bgColor } : { backgroundColor: bgColor };
    
    return React.createElement(
        tag,
        {
            style: {
                fontFamily: scheme[4],
                border: scheme[3],
                borderRadius: scheme[5],
                borderColor: colorStyle,
                ...colorStyle,
                ...bgColorStyle
            }
        },
        text
    );
}

const paragraph = (text, scheme) => {
    const tag = 'p';
    
    const colorStyle   = scheme[2].includes('gradient') ? { background: color }   : { color: color };
    const bgColorStyle = scheme[0].includes('gradient') ? { background: bgColor } : { backgroundColor: bgColor };

    return React.createElement(
        tag,
        {
            style: {
                fontFamily: scheme[4],
                border: scheme[3],
                borderRadius: scheme[5],
                borderColor: colorStyle,
                ...colorStyle,
                ...bgColorStyle
            }
        },
        text
    );
}