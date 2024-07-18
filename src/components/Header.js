import React from 'react';
import ReactDOMClient from 'react-dom/client';
import { IoPersonSharp } from "react-icons/io5";
import tg from "../resourses.js";
let username1;


class Header extends React.Component {
    constructor(props) {
        super(props);
        if(tg){
            username1 = tg.username ;
            console.log(username1);
            console.log(tg.username, ',,', tg.WebAppUser.username, ',,', tg.WebAppUser.first_name, ' ,', tg.last_name);
            username1 = tg.username + ',1,' + tg.WebAppUser.username + ',2,' +  tg.WebAppUser.first_name + ',3,' + tg.last_name;
        }else{
            username1 = "Имя Фамилия)";
        }
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