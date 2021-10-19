import React, { useState } from 'react';
import Heading from './Heading';
import Body from './Body';
import Rules from './Rules';

function  App() {
    const [score,setScore] = useState(0);
    return (<div>
        <Heading score={score} />
        <Rules />
        <Body score={score} setScore={setScore}/>
    </div>);
}

export default App;