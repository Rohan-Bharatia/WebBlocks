import React from 'react'

const image = (url, alt, scheme) => {
    const tag = 'img';

    return React.createElement(
        tag,
        {
            src: url,
            alt: alt,
            style: {
                fontFamily: scheme[4],
                border: scheme[3],
                borderRadius: scheme[5],
                borderColor: colorStyle,
                ...colorStyle,
                ...bgColorStyle
            }
        }
    );
}