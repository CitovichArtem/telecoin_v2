import React from 'react';
import ReactDOMClient from 'react-dom/client';
import { IoPersonSharp } from "react-icons/io5";
import tg from "../resourses.js";
let username1;
if(tg){
    username1 = tg.WebAppUser.first_name + " " + tg.WebAppUser.last_name;
}else{
    username1 = "Имя Фамилия)";
}

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: username1,
        }
    }
    render() {
        return(
            <header>
                {/* <img className="profilePic" src="./img/"></img> */}
                <IoPersonSharp className='profileIcon'/>
                <div className="profileName">{this.state.username}</div>
                <div className="exchange"></div>
            </header>
    )}
}

export default Header