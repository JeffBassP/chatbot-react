import React, { useState, useEffect } from 'react';
import './messageItem.css';

export default ({data, key}) => {
    
    const [time, setTime] = useState('');

    useEffect(() => {
        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();

        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        setTime(`${hours}:${minutes}`);
    });

   
    return (
        <div 
        className='message-line' 
        style={{justifyContent: 'flex-end'}}
        >
            <div className='message-item'>
                <div className="message-text">{data.body}</div>
            <div className='message-date'>{time}</div>
            </div>
        </div>
         
       
    )

}