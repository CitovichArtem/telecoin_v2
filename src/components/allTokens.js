import React from 'react';
import ReactDOM from 'react-dom/client';

class AllTokens extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allTokens: 793638451,
        }
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