import React from 'React';

import Text from './text.jsx';
import Image from './image.jsx';
import Color from './color.jsx'

const colorScheme = Color.scheme(Color.gradient('linear', 'to right', ['#FFFACD', '#E3E0C3']), '#BDB76B', '#BDB76B', '#BDB76B', 'Calibri', 2.5);

const App = () => {
    return (
        <div>
            { Text.header(1, 'Welcome to WebBlocks', colorScheme) }
            { Image.image('assets/react.js.png', 'example', colorScheme) }
            { Text.paragraph('WebBlocks is a React.js project that make website building easy.', colorScheme) }
        </div>
    );
}

export default App;