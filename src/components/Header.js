import React from 'react';
import ReactDOMClient from 'react-dom/client';
import { IoPersonSharp } from "react-icons/io5";
import { fullName } from '../resourses';


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: fullName,
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