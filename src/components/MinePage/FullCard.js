import React, { useState, useEffect } from 'react';
import { IoCloseCircle } from "react-icons/io5";
import { buyCardByName, getCardByName, arr } from '../../resourses';

const FullCard = ({ imgSrc, title, text, profit, lvl, price, incomeIncrease, setShowFullCard }) => {
    const [isClosing, setIsClosing] = useState(false);
    const [currentBalance, setCurrentBalance] = useState(parseInt(arr.get('balance'), 10));

    useEffect(() => {
        // Код, который выполняется при монтировании компонента
        document.getElementById('SectionMenu').style.display = 'none';

        return () => {
            // Код, который выполняется при размонтировании компонента
            document.getElementById('SectionMenu').style.display = '';
        };
    }, []); // Пустой массив указывает, что эффект выполняется только при монтировании и размонтировании

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setShowFullCard(false);
        }, 200); // Время должно совпадать с длительностью анимации
    };

    const handleBuy = () => {
        if (currentBalance >= price) {
            buyCardByName(title);
            setCurrentBalance(currentBalance - price);
            handleClose();
        } else {
            console.log('Недостаточно средств для покупки.');
        }
        
    };

    const isDisabled = currentBalance < price;

    return (
        <section id="FullCard" className={`FullCard ${isClosing ? 'closing' : ''}`}>
            <div className='FullCardMain'>
                <img width="40px" height="40px" src={imgSrc} />
                <div className='FullCard__Text'>
                    <h3 className='FullCard__Title'>{title}</h3>
                    <p className='FullCard__Article'>{text}</p>
                    <p className='FullCard__ProfitTitle'>Прибыль в час</p>
                    <p className='FullCard__Profit'>+{incomeIncrease}</p>
                    <p className='FullCard__Price'>{price}</p>
                </div>
                <button
                    className={`FullCard__GetButton ${isDisabled ? 'disabled' : ''}`}
                    onClick={handleBuy}
                    disabled={isDisabled}
                >
                    <p>Получить</p>
                </button>
            </div>
            <IoCloseCircle className='closeIcon' onClick={handleClose} />
        </section>
    );
}

FullCard.defaultProps = {
    imgSrc: 'https://static.insales-cdn.com/files/1/7610/33635770/original/%D0%BF%D0%BE%D0%B4%D0%B0%D1%80%D0%BE%D0%BA_%D0%B2_%D0%BA%D0%BE%D1%80%D0%BE%D0%B1%D0%BA%D0%B5_%D1%81_%D0%B1%D0%B0%D0%BD%D1%82%D0%BE%D0%BC_1709488939662-1709488948646.png',
    title: 'SomeTitle',
    text: '+666'
};

export default FullCard;
