import React from 'react'

const image = (url, alt, width=200, height=200) => {
    const tag = 'img';

    return React.createElement(
        tag,
        {
            src: url,
            alt: alt,
            width: width,
            height: height
        }
    );
}