import React from 'react';
import ReactDOM from 'react-dom/client';
import arr from '../resourses.js';
class MyLeague extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            MyLeague: arr.get('myLeague'),
            MyLevel: 1,
        }
    }
    updateLeague = () => {
        this.setState({
            MyLeague: arr.get('myLeague'),
        });
    }
    componentDidMount() {
        window.updateLeague = this.updateLeague;
    }

    componentWillUnmount() {
        window.updateLeague = null;
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