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
                <Card showFullCardPage = {showFullCardPage} imgSrc={getCardByName('KYC').photo} title={getCardByName('KYC').name} text={getCardByName('KYC').text} profit={getCardByName('KYC').currentIncome} lvl={getCardByName('KYC').currentLevel} price={getCardByName('KYC').levelUpCosts[getCardByName('KYC').currentLevel]} incomeIncrease={getCardByName('KYC').incomeIncreases[getCardByName('KYC').currentLevel]} isLevelZero={getCardByName('KYC').currentLevel === 0} />
                <Card showFullCardPage = {showFullCardPage} imgSrc={getCardByName('ETH').photo} title={getCardByName('ETH').name} text={getCardByName('ETH').text} profit={getCardByName('ETH').currentIncome} lvl={getCardByName('ETH').currentLevel} price={getCardByName('ETH').levelUpCosts[getCardByName('ETH').currentLevel]} incomeIncrease={getCardByName('ETH').incomeIncreases[getCardByName('ETH').currentLevel]} isLevelZero={getCardByName('ETH').currentLevel === 0} />
                <Card showFullCardPage = {showFullCardPage} imgSrc={getCardByName('Card 3').photo} title={getCardByName('Card 3').name} text={getCardByName('Card 3').text} profit={getCardByName('Card 3').currentIncome} lvl={getCardByName('Card 3').currentLevel} price={getCardByName('Card 3').levelUpCosts[getCardByName('Card 3').currentLevel]} incomeIncrease={getCardByName('Card 3').incomeIncreases[getCardByName('Card 3').currentLevel]} isLevelZero={getCardByName('Card 3').currentLevel === 0} />
                <Card showFullCardPage = {showFullCardPage} imgSrc={getCardByName('Card 4').photo} title={getCardByName('Card 4').name} text={getCardByName('Card 4').text} profit={getCardByName('Card 4').currentIncome} lvl={getCardByName('Card 4').currentLevel} price={getCardByName('Card 4').levelUpCosts[getCardByName('Card 4').currentLevel]} incomeIncrease={getCardByName('Card 4').incomeIncreases[getCardByName('Card 4').currentLevel]} isLevelZero={getCardByName('Card 4').currentLevel === 0} />
                <Card showFullCardPage = {showFullCardPage} imgSrc={getCardByName('Card 5').photo} title={getCardByName('Card 5').name} text={getCardByName('Card 5').text} profit={getCardByName('Card 5').currentIncome} lvl={getCardByName('Card 5').currentLevel} price={getCardByName('Card 5').levelUpCosts[getCardByName('Card 5').currentLevel]} incomeIncrease={getCardByName('Card 5').incomeIncreases[getCardByName('Card 5').currentLevel]} isLevelZero={getCardByName('Card 5').currentLevel === 0} />
                <Card showFullCardPage = {showFullCardPage} imgSrc={getCardByName('Card 6').photo} title={getCardByName('Card 6').name} text={getCardByName('Card 6').text} profit={getCardByName('Card 6').currentIncome} lvl={getCardByName('Card 6').currentLevel} price={getCardByName('Card 6').levelUpCosts[getCardByName('Card 6').currentLevel]} incomeIncrease={getCardByName('Card 6').incomeIncreases[getCardByName('Card 6').currentLevel]} isLevelZero={getCardByName('Card 6').currentLevel === 0} />
                <Card showFullCardPage = {showFullCardPage} imgSrc={getCardByName('Card 7').photo} title={getCardByName('Card 7').name} text={getCardByName('Card 7').text} profit={getCardByName('Card 7').currentIncome} lvl={getCardByName('Card 7').currentLevel} price={getCardByName('Card 7').levelUpCosts[getCardByName('Card 7').currentLevel]} incomeIncrease={getCardByName('Card 7').incomeIncreases[getCardByName('Card 7').currentLevel]} isLevelZero={getCardByName('Card 7').currentLevel === 0} />
                <Card showFullCardPage = {showFullCardPage} imgSrc={getCardByName('Card 8').photo} title={getCardByName('Card 8').name} text={getCardByName('Card 8').text} profit={getCardByName('Card 8').currentIncome} lvl={getCardByName('Card 8').currentLevel} price={getCardByName('Card 8').levelUpCosts[getCardByName('Card 8').currentLevel]} incomeIncrease={getCardByName('Card 8').incomeIncreases[getCardByName('Card 8').currentLevel]} isLevelZero={getCardByName('Card 8').currentLevel === 0} />
                <Card showFullCardPage = {showFullCardPage} imgSrc={getCardByName('Card 9').photo} title={getCardByName('Card 9').name} text={getCardByName('Card 9').text} profit={getCardByName('Card 9').currentIncome} lvl={getCardByName('Card 9').currentLevel} price={getCardByName('Card 9').levelUpCosts[getCardByName('Card 9').currentLevel]} incomeIncrease={getCardByName('Card 9').incomeIncreases[getCardByName('Card 9').currentLevel]} isLevelZero={getCardByName('Card 9').currentLevel === 0} />

            </div>
            {showFullCard && <FullCard {...fullCardProps} setShowFullCard={setShowFullCard}/>}
        </section>
    )
}


export default MinePage