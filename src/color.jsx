import React from 'react';

const scheme = (background, header, text, border, font, radius) => {
    return [background, header, text, border, font, radius];
}

const gradient = (style, dir, colors) => {
    return `${style}-gradient(${dir}, ${colors.join(', ')})`;
}