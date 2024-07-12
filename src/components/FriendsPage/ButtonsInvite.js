import React from 'react';
import { MdContentCopy } from "react-icons/md";
class ButtonsInvite extends React.Component {
    render() {
        return(
        <div id="ButtonsInvite" className="ButtonsInvite">
            <button className="InviteButton">
                <p>Пригласить друга</p>
            </button>
            <button className="CopyButton">
                <MdContentCopy className="CopyIcon" />
            </button>
        </div>   
    )}
}

export default ButtonsInvite