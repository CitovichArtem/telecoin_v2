import React from 'react';
import ReactDOM from 'react-dom/client';

class GamePage extends React.Component {
    
    render() {
        return(
            <section id="GamePage" className='GamePage'>
                <img width="50px" src="img/монетка.png"/>
                <h1>GamePAGE</h1>
                <p>Раздел в разработке</p>
                <video id='video3inrow' className="video3inrow" src="./img/3inrow.mp4" autoPlay></video>
            </section>
    )}
}

export default GamePage