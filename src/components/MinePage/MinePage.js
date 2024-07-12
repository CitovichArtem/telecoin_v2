import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import AllTokens from '../allTokens.js'
import MyLeague from '../myLeague.js'
import Statistics from '../statistics.js';
import Card from './card.js';
import FullCard from './FullCard.js';

const MinePage  = () =>  {
    const [showFullCard, setShowFullCard] = useState(false);
    const [fullCardProps, setFullCardProps] = useState({});
    const showFullCardPage = (imgSrc, title, text, profit, lvl, price ) => {
        setFullCardProps({ imgSrc, title, text, profit, lvl, price });
        setShowFullCard(!showFullCard);    
    };

    return(
        <section id="MinePage" className='MinePage'>
            <Statistics />
            <AllTokens/>
            <MyLeague/>
            <div className='cards'>
                <Card showFullCardPage = {showFullCardPage} imgSrc='img/монетка.png' title='License Europe' text='Получите профессиональную юридическую консультацию или оценку вашего бизнеса' profit='942' lvl='9' price='16,61M' />
                <Card showFullCardPage = {showFullCardPage} imgSrc='img/монетка.png' title='License America' text='Получите профессиональную юридическую консультацию или оценку вашего бизнеса' profit='942' lvl='9' price='16,61M' />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            {showFullCard && <FullCard {...fullCardProps} setShowFullCard={setShowFullCard}/>}
        </section>
    )
}


export default MinePage