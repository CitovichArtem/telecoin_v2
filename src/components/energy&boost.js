//https://cdn.icon-icons.com/icons2/1903/PNG/512/iconfinder-weather-weather-forecast-lightning-storm-energy-3859139_121230.png
import React from 'react';
import ReactDOM from 'react-dom/client';
import {arr} from '../resourses.js';

class EnergyBoost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            maxEnergy: arr.get('energyLimit'),
            energy: arr.get('energy'),
        }
    }
    updateEnergy = () => {
        this.setState({
            energy: arr.get('energy'),
            maxEnergy: arr.get('energyLimit'),
        });
    }
    componentDidMount() {
        window.updateEnergy = this.updateEnergy;
    }

    componentWillUnmount() {
        window.updateEnergy = null;
    }
    render() {
        return(
            <section className='EnergyBoost'>
                <div className='Energy'>
                    <img width="25px" src="https://cdn.icon-icons.com/icons2/1903/PNG/512/iconfinder-weather-weather-forecast-lightning-storm-energy-3859139_121230.png"/>
                    <p className='TextEnergy'>{this.state.energy }{"/"}{this.state.maxEnergy}</p>
                </div>
                <div className='Boost'>
                    <img width="25px" src="https://png.klev.club/uploads/posts/2024-05/png-klev-club-igag-p-emodzi-raketa-png-24.png"/>
                    <p className='TextBoost'>Boost</p>
                </div>
                
            </section>
    )}
}

export default EnergyBoost