import React from 'react';
import Friend from './Friend';
class FriendsList extends React.Component {
    render() {
        return(
        <div id="friendsList" className="friendsList">
            <p>Список ваших друзей(7)</p>
            <Friend />
            <Friend />
            <Friend />

        </div>   
    )}
}

export default FriendsList