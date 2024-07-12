import React from 'react';
import FriendsList from './FriendsList';
import ButtonsInvite from './ButtonsInvite';
class FriendsPage extends React.Component {
    render() {
        return(
        <div id="friendsPage" className="friendsPage">
            <h1>Пригласите друзей!</h1>
            <h2>Вы и ваш друг получите бонусы</h2>
            <div className='invitesInfo'>
                <img width="50px" height="50px" src='img/белподарок.png'/>
                <div className='invitesText' >
                    <h3>Пригласить друга</h3>
                    <p><span>+5 000</span> для вас и вашего друга</p>
                </div>
            </div>
            <div className='invitesInfo secondInvitesInfo'>
                <img width="50px" height="50px" src='img/чернподарок.png'/>
                <div className='invitesText'>
                    <h3>Пригласить друга с Telegram Premium</h3>
                    <p><span>+25 000</span> для вас и вашего друга</p>
                </div>
            </div>
            <a href='' className='moreBonusLink'>Больше бонусов</a>
            <FriendsList />
        </div>   
    )}
}

export default FriendsPage