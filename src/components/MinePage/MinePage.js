import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import AllTokens from '../allTokens.js'
import MyLeague from '../myLeague.js'
import Statistics from '../statistics.js';
import Card from './card.js';
import FullCard from './FullCard.js';
import {arr, getCardByName} from '../../resourses.js';

const MinePage  = () =>  {
    const [showFullCard, setShowFullCard] = useState(false);
    const [fullCardProps, setFullCardProps] = useState({});
    const showFullCardPage = (imgSrc, title, text, profit, lvl, price, incomeIncrease ) => {
        setFullCardProps({ imgSrc, title, text, profit, lvl, price, incomeIncrease });
        setShowFullCard(!showFullCard);    
    };

    return(
        <section id="MinePage" className='MinePage'>
            <Statistics />
            <AllTokens/>
            <MyLeague/>
            <div className='cards'>
                <Card showFullCardPage = {showFullCardPage} imgSrc={getCardByName('Card 1').photo} title={getCardByName('Card 1').name} text={getCardByName('Card 1').text} profit={getCardByName('Card 1').currentIncome} lvl={getCardByName('Card 1').currentLevel} price={getCardByName('Card 1').levelUpCosts[getCardByName('Card 1').currentLevel]} incomeIncrease={getCardByName('Card 1').incomeIncreases[getCardByName('Card 1').currentLevel]} isLevelZero={getCardByName('Card 1').currentLevel === 0} />
                <Card showFullCardPage = {showFullCardPage} imgSrc={getCardByName('Card 2').photo} title={getCardByName('Card 2').name} text={getCardByName('Card 2').text} profit={getCardByName('Card 2').currentIncome} lvl={getCardByName('Card 2').currentLevel} price={getCardByName('Card 2').levelUpCosts[getCardByName('Card 2').currentLevel]} incomeIncrease={getCardByName('Card 2').incomeIncreases[getCardByName('Card 2').currentLevel]} isLevelZero={getCardByName('Card 2').currentLevel === 0} />
                <Card showFullCardPage = {showFullCardPage}  />
                <Card showFullCardPage = {showFullCardPage}  />
                <Card showFullCardPage = {showFullCardPage}  />
                <Card showFullCardPage = {showFullCardPage}  />
                <Card showFullCardPage = {showFullCardPage}  />
                <Card showFullCardPage = {showFullCardPage}  />
                <Card showFullCardPage = {showFullCardPage}  />
            </div>
            {showFullCard && <FullCard {...fullCardProps} setShowFullCard={setShowFullCard}/>}
        </section>
    )
}


export default MinePage