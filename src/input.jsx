import React from 'react';

const button = (text, event, scheme) => {
    const tag = 'button';

    const colorStyle   = scheme[2].includes('gradient') ? { background: color }   : { color: color };
    const bgColorStyle = scheme[0].includes('gradient') ? { background: bgColor } : { backgroundColor: bgColor };
    
    return React.createElement(
        tag,
        {
            onClick: event,
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

const text = (placeholder, onChange, scheme) => {
    const tag = 'input';

    const colorStyle   = scheme[2].includes('gradient') ? { background: color }   : { color: color };
    const bgColorStyle = scheme[0].includes('gradient') ? { background: bgColor } : { backgroundColor: bgColor };
    
    return React.createElement(
        tag,
        {
            type: "text",
            placeholder: placeholder,
            onChange: onChange,
            style: {
                fontFamily: scheme[4],
                border: scheme[3],
                borderRadius: scheme[5],
                borderColor: colorStyle,
                ...colorStyle,
                ...bgColorStyle
            }
        },
    );
}

const checkbox = (text, checked, onChange, scheme) => {
    const tag = 'input';

    const colorStyle   = scheme[2].includes('gradient') ? { background: color }   : { color: color };
    const bgColorStyle = scheme[0].includes('gradient') ? { background: bgColor } : { backgroundColor: bgColor };
    
    return React.createElement(
        tag,
        {
            type: "checkbox",
            checked: checked,
            onChange: onChange,
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