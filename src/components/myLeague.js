import React from 'react';
import ReactDOM from 'react-dom/client';

class MyLeague extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            MyLeague: "Grandmaster",
            MyLevel: 9,
        }
    }
    render() {
        return(
            <section className='MyLeague'>
                <div class="leaguelevel">
                    <p className='TextLeague'>{this.state.MyLeague}{">"}</p>
                    <p className='TextLevel'>{"Level "}{this.state.MyLevel}/10</p>
                </div>
                
                <div id='Strip' className="Strip"><div id='progress-bar' className='progress-bar'></div></div>
                
            </section>
    )}
}

export default MyLeague