import React from 'React';

import Text from './text.jsx';
import Image from './image.jsx';
import Color from './color.jsx'
import Input from './input.jsx'

const globalScheme = Color.scheme(Color.gradient('linear', 'to right', ['#FFFACD', '#E3E0C3']), '#BDB76B', '#BDB76B', '#BDB76B', 'Calibri', 2.5);

const App = () => {
    return (
        <div>
            { Text.title("WebBlocks", globalScheme) }
            { Text.header(1, 'Welcome to WebBlocks', globalScheme) }
            { Image.image('assets/react.js.png', 'example', globalScheme) }
            { Text.paragraph('WebBlocks is a React.js project that make website building easy.', globalScheme) }
            { Input.button("Press me!", alert("Hello!"), globalScheme) }
            { Input.text("Type here!", null, globalScheme) }
            { Input.checkbox("Check me off!", false, null, globalScheme) }
        </div>
    );
}

export default App;