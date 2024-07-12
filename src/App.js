import React, { useState } from 'react';
import ReactDOMClient from 'react-dom/client';
import './css/main.css';
import Header from'./components/Header.js';
import Body from './components/body.js';
import MenuBar from './components/menuBar.js';
import AirdropPage from './components/Airdrop/AirdropPage.js';
import FriendsPage from './components/FriendsPage/FriendsPage.js';
import ButtonsInvite from './components/FriendsPage/ButtonsInvite.js';
import EarnPage from './components/EarnPage.js/EarnPage.js';
import GamePage from './components/Game/GamePage.js';
import MinePage from './components/MinePage/MinePage.js';

const App = () => {
    const [showGame, setShowGame] = useState(true);
    const [showMine, setShowMine] = useState(false);
    const [showExchange, setShowExchange] = useState(false);
    const [showAirdrop, setShowAirdrop] = useState(false);
    const [showFriends, setShowFriends] = useState(false);
    const [showEarn, setShowEarn] = useState(false);
    const showGamePage = () => {
        setShowGame(true);
        setShowMine(false);
        setShowExchange(false);
        setShowAirdrop(false);
        setShowFriends(false);
        setShowEarn(false);
        
    };
    const showMinePage = () => {
        setShowGame(false);
        setShowMine(true);
        setShowExchange(false);
        setShowAirdrop(false);
        setShowFriends(false);
        setShowEarn(false);
        
    };
    const showExchangePage = () => {
        setShowMine(false);
        setShowGame(false);
        setShowExchange(true);
        setShowAirdrop(false);
        setShowFriends(false);
        setShowEarn(false);
        
    };
    
    const showAirdropPage = () => {
        setShowGame(false);
        setShowMine(false);
        setShowAirdrop(true);
        setShowExchange(false);
        setShowFriends(false);
        setShowEarn(false);
    };
    const showFriendsPage = () => {
        setShowGame(false);
        setShowMine(false);
        setShowFriends(true);
        setShowAirdrop(false);
        setShowExchange(false);
        setShowEarn(false);
    };
    const showEarnPage = () => {
        setShowGame(false);
        setShowMine(false);
        setShowEarn(true);
        setShowFriends(false);
        setShowAirdrop(false);
        setShowExchange(false);
        
    };
    return (
        <div>
            {showExchange && <div className='ExchangePage'><Header /><Body /></div>}
            {showFriends && <div className=''><FriendsPage /><ButtonsInvite /></div>}
            {showAirdrop && <AirdropPage />}
            {showGame && <GamePage />}
            {showEarn && <EarnPage />}
            {showMine && <MinePage />}
            <MenuBar showMinePage={showMinePage} showGamePage={showGamePage} showEarnPage={showEarnPage} showAirdropPage={showAirdropPage} showExchangePage = {showExchangePage} showFriendsPage={showFriendsPage} />
        </div>
    );
    };

export default App;