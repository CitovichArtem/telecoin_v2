import React from 'react';
import ReactDOM from 'react-dom/client';
import arr from '../resourses.js';
class AllTokens extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allTokens: arr.get('balance'),
        }
    }

    updateBalance = () => {
        this.setState({
            allTokens: arr.get('balance'),
        });
    }
    componentDidMount() {
        window.updateBalance = this.updateBalance;
    }

    componentWillUnmount() {
        window.updateBalance = null;
    }

    render() {
        return(
            <section className='AllTokens'>
                <img width="50px" src='img/монетка.png'/>
                <p id='TextAllTokens' className='TextAllTokens'>{Intl.NumberFormat('ru-RU').format(this.state.allTokens)}</p>
            </section>
    )}
}

export default AllTokens