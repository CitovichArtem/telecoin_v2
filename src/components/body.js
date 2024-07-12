import React from 'react';

import Statistics from './statistics.js'
import AllTokens from './allTokens.js'
import MyLeague from './myLeague.js'
import TapCoin from './tapCoin.js';
import EnergyBoost from './energy&boost.js';
import ReactDOM from 'react-dom/client';

class Body extends React.Component {
    render() {
        return(
        <div id="myBody" className="myBody">
            <Statistics/>
            <AllTokens/>
            <MyLeague/>
            <TapCoin/>
            <EnergyBoost/>
        </div>   
    )}
}

export default Body