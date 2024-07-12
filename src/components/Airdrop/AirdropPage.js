import React from 'react';
import ReactDOM from 'react-dom/client';

class AirdropPage extends React.Component {
    
    render() {
        return(
            <section id="AirdropPage" className='AirdropPage'>
                <img className='topImg' width="50px" src="img/монетка.png"/>
                <h1>Приготовьтесь, Airdrop уже скоро!</h1>
                <ul>
                    <li><span>Переговоры с биржами</span></li>
                
                    <li><span>Ключевые партнерства на подходе</span></li>
                    <li><span>Список задач Airdrop</span></li>
                </ul>
                <button className="WalletButton">
                    <img src="img/wallet.png" width='40px'/>    
                    <p>Подключай свой кошелёк TON</p>
                </button>
            </section>
    )}
}

export default AirdropPage