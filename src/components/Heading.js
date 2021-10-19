import React from 'react';

function Heading(props) {
    return (
        <div className="container">
            <div className="title-container">
                <h2>ROCK</h2>
                <h2>PAPER</h2>
                <h2>SCISSORS</h2>
            </div>
            <div className="score-container">
                <p>SCORE</p>
                <h1>{props.score}</h1>
            </div>
        </div>
    );
}

export default Heading;