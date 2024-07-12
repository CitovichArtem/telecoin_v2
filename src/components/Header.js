import React from 'react';
import ReactDOMClient from 'react-dom/client';
import { IoPersonSharp } from "react-icons/io5";

class Header extends React.Component {
    render() {
        return(
            <header>
                {/* <img className="profilePic" src="./img/"></img> */}
                <IoPersonSharp className='profileIcon'/>
                <div className="profileName">Имя Фамилия</div>
                <div className="exchange"></div>
            </header>
    )}
}

export default Header