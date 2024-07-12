import React from 'react';
import ReactDOM from 'react-dom/client';

class TapCoin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    render() {
        return(
            <section className='TapCoin'>
                <img id="clickableArea"  className='clickableArea' src='img/telecoin.png'/>
                
            </section>
    )}
}

export default TapCoin