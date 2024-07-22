import React, {useState, useEffect} from 'react';
import { IoCloseCircle } from "react-icons/io5";

const FullCard =({imgSrc, title, text, profit, lvl, price, setShowFullCard}) => {
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
            setShowFullCard(false);
        }, 200); // Время должно совпадать с длительностью анимации
    };
    document.getElementById('SectionMenu').style.display = '';
        return(
            <section id="FullCard" className={`FullCard ${isClosing ? 'closing' : ''}`}>
                <div className='FullCardMain'>
                    <img width="40px" height="40px" src={imgSrc}/>
                    <div className='FullCard__Text' >
                        <h3 className='FullCard__Title'>{title}</h3>
                        <p className='FullCard__Article'>{text}</p>
                        <p className='FullCard__ProfitTitle'>Прибыль в час</p>
                        <p className='FullCard__Profit'>+{Math.floor(profit/5)}</p>
                        <p className='FullCard__Price'>{price}</p>
                    </div>
                    <button className="FullCard__GetButton">
                        <p>Получить</p>
                    </button>
                </div>
                <IoCloseCircle className='closeIcon' onClick={handleClose} />
                
            </section>
    )

    

}

FullCard.defaultProps = {
    imgSrc: 'https://static.insales-cdn.com/files/1/7610/33635770/original/%D0%BF%D0%BE%D0%B4%D0%B0%D1%80%D0%BE%D0%BA_%D0%B2_%D0%BA%D0%BE%D1%80%D0%BE%D0%B1%D0%BA%D0%B5_%D1%81_%D0%B1%D0%B0%D0%BD%D1%82%D0%BE%D0%BC_1709488939662-1709488948646.png',
    title: 'SomeTitle',
    text: '+666'
}
export default FullCard
