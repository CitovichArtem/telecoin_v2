import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.js';

class GamePage extends React.Component {
    
    render() {
        return(
            <section id="GamePage" className='GamePage'>
                <img width="50px" src="img/монетка.png"/>
                <h1>GamePAGE</h1>
                <p>Раздел в разработке</p>
                <div className='GameContainer'>

                </div>
                <button id="playButton">Играть</button>
            </section>
    )}
}

export default GamePage