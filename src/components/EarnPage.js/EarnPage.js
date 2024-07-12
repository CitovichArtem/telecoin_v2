import React, { useState } from 'react';
import EarnTask from './EarnTask';
import EarnFullTask from './EarnFullTask';

const EarnPage = () =>  {
    const [showFirstTask, setShowFirstTask] = useState(false);
    const [fullTaskProps, setFullTaskProps] = useState({});
    const showFirstTaskPage = (imgSrc, title, text) => {
        setFullTaskProps({ imgSrc, title, text });
        setShowFirstTask(!showFirstTask);    
    };
    return(
        <section id="EarnPage" className='EarnPage'>
            <img className='topImg' width="50px" src='img/монетка.png'/>
            <h1>Заработай больше монет</h1>
            <p>Ежедневные задания</p>
            <EarnTask showFirstTaskPage={showFirstTaskPage} imgSrc='img/чернподарок.png' title="Ежедневная награда" text="+6 649 000"/>
            <p>Список заданий</p>
            {!showFirstTask &&<ul className='ulTasks'>
                <li><EarnTask showFirstTaskPage={showFirstTaskPage} imgSrc='img/чернподарок.png' title="Новое обновление Hamster Kombat" text="+100 000" /></li>
                <li><EarnTask showFirstTaskPage={showFirstTaskPage} imgSrc='img/чернподарок.png' title="Присоединяйся к нашему Telegram каналу" text="+5 000"/></li>
                <li><EarnTask showFirstTaskPage={showFirstTaskPage} imgSrc='img/чернподарок.png' title="Получите эксклюзивную информацию о листинге" text="+50 000"/></li>
                <li><EarnTask showFirstTaskPage={showFirstTaskPage} imgSrc='img/чернподарок.png' title="Выбери биржу" text="+5 000"/></li>
                <li><EarnTask showFirstTaskPage={showFirstTaskPage} imgSrc='img/чернподарок.png' title="Пригласи друзей" text="+25 000"/></li>
            </ul>}
            {showFirstTask && <EarnFullTask {...fullTaskProps} setShowFirstTask={setShowFirstTask}/>}
        </section>
    )
}

export default EarnPage