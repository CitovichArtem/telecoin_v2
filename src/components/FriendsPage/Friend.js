import React from 'react';
import { IoPersonSharp } from "react-icons/io5";
class Friend extends React.Component {
    render() {
        return(
        <div id="friend" className="friend">
            <IoPersonSharp className='profileIcon'/>
            <div className="profileName">Имя Фамилия</div>
            <div className="exchange"></div>
        </div>   
    )}
}

export default Friend