import React from 'react';
import ReactDOM from 'react-dom/client';

class Statistics extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clickProfit: "+19",
            moneyToUp: "1B",
            hourProfit: "+865,47K",
            firstTip: "Подсказка 1",
            secondTip: "Подсказка 2",
            thirdTip: "Подсказка 3"
        }
    }
    render() {
        return(
            <section className='Statistics'>
                <div className="clickProfit tooltip">
                    <p className='TextInfo'>Прибыль за тап</p>
                    <div className="picvalue ">
                        <img width="15px" src='img/монетка.png'></img>
                        <p>{this.state.clickProfit}</p>
                        <span className='tooltiptext'>{this.state.firstTip} </span>
                    </div>
                    
                </div>

                <div className="moneyToUp tooltip">
                    <p className='TextInfo'>Монет для апа</p>
                    <p id='moneyToUp'>{this.state.moneyToUp}</p>
                    <span className='tooltiptext'>{this.state.secondTip} </span>
                </div>
                
                <div className="hourProfit tooltip">
                    <p className='TextInfo'>Прибыль в час</p>
                    <div className="picvalue">
                        <img width="15px" src='img/монетка.png'></img>
                        <p>{this.state.hourProfit}</p>
                        <span className='tooltiptext'>{this.state.thirdTip} </span>
                    </div>
                </div>
            </section>
    )}
}

export default Statistics