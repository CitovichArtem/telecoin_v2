import React, {useState, useEffect} from 'react';
import { IoCloseCircle } from "react-icons/io5";

const EarnFullTask =({imgSrc, title, text , setShowFirstTask}) => {
    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
        document.getElementById('SectionMenu').style.display = 'none';
        return () => {
            document.getElementById('SectionMenu').style.display = '';
        };
    }, []);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setShowFirstTask(false);
        }, 200); // Время должно совпадать с длительностью анимации
    };
    document.getElementById('SectionMenu').style.display = '';
    if (text === '+6 649 000'){
        console.log('yes');
        return(
            <section id="EarnFullTask" className={`EarnFullTask ${isClosing ? 'closing' : ''}`}>
                <IoCloseCircle className='closeIcon' onClick={handleClose} />
                <div className='FullDailyTaskMain'>
                    <img className="EarnFullTask__topImg" width="40px" height="40px" src={imgSrc}/>
                    <div className='EarnFullText' >
                        <h3>{title}</h3>
                        <span>Забирайте монеты за ежедневный вход в игру без пропусков. Кнопку "Забрать" нужно нажимать ежедневно, иначе счетчик дней начнется заново</span>
                    </div>
                    <div className='dailyGridBlock'>
                        <div>
                            <span>День 1</span>
                            <img className='MoneyInDayBlock' src='img/монетка20.png' />
                            <span>500</span>
                        </div>

                        <div>
                            <span>День 2</span>
                            <img className='MoneyInDayBlock' src='img/монетка20.png' />
                            <span>1K</span>
                        </div>

                        <div>
                            <span>День 3</span>
                            <img className='MoneyInDayBlock' src='img/монетка20.png' />
                            <span>2,5K</span>
                        </div>

                        <div>
                            <span>День 4</span>
                            <img className='MoneyInDayBlock' src='img/монетка20.png' />
                            <span>5K</span>
                        </div>

                        <div>
                            <span>День 5</span>
                            <img className='MoneyInDayBlock' src='img/монетка20.png' />
                            <span>15K</span>
                        </div>

                        <div>
                            <span>День 6</span>
                            <img className='MoneyInDayBlock' src='img/монетка20.png' />
                            <span>25K</span>
                        </div>

                        <div>
                            <span>День 7</span>
                            <img className='MoneyInDayBlock' src='img/монетка20.png' />
                            <span>100K</span>
                        </div>

                        <div>
                            <span>День 8</span>
                            <img className='MoneyInDayBlock' src='img/монетка20.png' />
                            <span>500K</span>
                        </div>

                        <div>
                            <span>День 9</span>
                            <img className='MoneyInDayBlock' src='img/монетка20.png' />
                            <span>1M</span>
                        </div>

                        <div>
                            <span>День 10</span>
                            <img className='MoneyInDayBlock' src='img/монетка20.png' />
                            <span>5M</span>
                        </div>
                        
                    </div>
                </div>
                
                <button className="dailyGetButton">   
                    <p>Забрать</p>
                </button>
            </section>
        )
    }else{
        console.log('no');
        return(
            <section id="EarnFullTask" className={`EarnFullTask ${isClosing ? 'closing' : ''}`}>
                <div className='FullTaskMain'>
                    <img width="40px" height="40px" src={imgSrc}/>
                    <div className='EarnFullText' >
                        <h3>{title}</h3>
                        <p>{text}</p>
                    </div>
                </div>
                <IoCloseCircle className='closeIcon' onClick={handleClose} />
                
            </section>
        )
    }
        

    

}

EarnFullTask.defaultProps = {
    imgSrc: 'https://static.insales-cdn.com/files/1/7610/33635770/original/%D0%BF%D0%BE%D0%B4%D0%B0%D1%80%D0%BE%D0%BA_%D0%B2_%D0%BA%D0%BE%D1%80%D0%BE%D0%B1%D0%BA%D0%B5_%D1%81_%D0%B1%D0%B0%D0%BD%D1%82%D0%BE%D0%BC_1709488939662-1709488948646.png',
    title: 'SomeTitle',
    text: '+666'
}
export default EarnFullTask
