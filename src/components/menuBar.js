import React from 'react';

const MenuBar = ({ showAirdropPage, showExchangePage, showFriendsPage, showEarnPage, showGamePage, showMinePage}) => {
    return (
        <section id='SectionMenu' className='SectionMenu'>
            <ul className='MenuBar'>
                <li>
                    <a href='#' className='GameMenu' onClick={showGamePage}>
                        <div className='ForImage'>
                            <img width="35px"  src='img/игра.png'/>
                        </div>
                        <p>Game</p>
                    </a>
                </li>
                <li>
                    <a href='#' className='ExchangeMenu' onClick={showExchangePage}>
                        <div className='ForImage'>
                            <img width="35px"  src='https://media.zenfs.com/en/news_direct/7e32410aeff249f0f8b012a9755f52a5'/>
                        </div>
                        <p>Exchange</p>
                    </a>
                </li>
                <li>
                    <a href='#' className='MineMenu' onClick={showMinePage}>
                        <div className='ForImage'>
                            <img width="35px" src='https://cdn-icons-png.flaticon.com/512/664/664112.png'/>
                        </div>
                        <p>Mine</p>
                    </a>
                </li>
                <li>
                    <a href='#' className='FriendsMenu' onClick={showFriendsPage}>
                        <div className='ForImage'>
                            <img width="35px" src='https://static.vecteezy.com/system/resources/thumbnails/020/522/383/small/simple-people-icon-icon-of-grouping-of-people-png.png'/>
                        </div>
                        <p>Friends</p>
                    </a>
                </li>
                <li>
                    <a href='#' className='EarnMenu' onClick={showEarnPage}>
                        <div className='ForImage'>
                            <img width="35px" color="white" src='https://static.vecteezy.com/system/resources/thumbnails/020/522/383/small/simple-people-icon-icon-of-grouping-of-people-png.png'/>
                        </div>
                        <p>Earn</p>
                    </a>
                </li>
                <li>
                    <a href='#' id="AirdropMenu" className='AirdropMenu' onClick={showAirdropPage}>
                        <div className='ForImage'>
                            <img width="30px" src='img/монетка.png'/>
                        </div>
                        <p>Airdrop</p>
                    </a>
                </li>
            </ul>
        </section>
    );
};

export default MenuBar;
