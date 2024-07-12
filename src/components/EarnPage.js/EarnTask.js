import React from 'react';

const EarnTask =({imgSrc, title, text, showFirstTaskPage}) => {
        return(
            <div className='EarnTask' onClick={()=>showFirstTaskPage(imgSrc, title, text)} >
                <img width="40px" height="40px" src={imgSrc}/>
                <div className='EarnText' >
                    <h3>{title}</h3>
                    <p>{text}</p>
                </div>
            </div>
    )
}
EarnTask.defaultProps = {
    imgSrc: 'img/монетка.png',
    title: 'SomeTitle',
    text: '+666'
}
export default EarnTask
