import React, { useState} from 'react';
import EmojiPicker from 'emoji-picker-react';
import './chatBox.css';

import MessageItem from './../messageItem/messageItem';

import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import CloseIcon from '@material-ui/icons/Close';
import SendIcon from '@material-ui/icons/Send';
import MicIcon from '@material-ui/icons/Mic';
import messageItem from './../messageItem/messageItem';


export default () =>{
    const [emojiOpen, setEmojiOpen] = useState(false);
    const [text, setText]= useState('');
    const [listening, setListening] = useState(false);
    const [list, setList] = useState([
        {body: 'bobiodbeiode'},
        {body: 'bobiodbeiode'},
        {body: 'bobiodbeiode'},
        {body: 'bobiodbeiode'}]);

    let recognition = null;
    let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (SpeechRecognition !== undefined){
        recognition =  new SpeechRecognition();
    }

    const handleEmojiOpen = () =>{
        setEmojiOpen(true)
    }
    const handleEmojiClose = () =>{
        setEmojiOpen(false)
    }
    const handleEmojiPicker = (event, emojiObject) =>{
        setText(text + emojiObject.emoji);
    }
    const handleMicClick = () =>{
        if(recognition !== null){
            recognition.onstart = () =>{
                setListening(true);
            }
            recognition.onend = () =>{
                setListening(false);
            }
            recognition.onresult = (event) => {
                setText(event.results[0][0].transcript);
            }
            recognition.start();

        }
    }
    const handleSendClick = () => {
        if(text !== ''){
            messageItem('1', text)
        }
    }

    return (
        <div className="chat-box">
        <div className="chat-header">
            <img className="chat-box--avatar" src='https://www.w3schools.com/howto/img_avatar.png' alt=""/>
            <div className="chat-box--name">Jeferson Sergio</div>
            </div>
        <div className='chat-area'>
            {list.map((item, key)=>(
                <MessageItem
                key={key}
                data={item}/>
            ))}
        </div>
        <div className="chat-box--emojiarea" style={{height: emojiOpen ? '200px' : '0px'}}>
            <EmojiPicker
            onEmojiClick={handleEmojiPicker}
            disableSearchBar
            disableSkinTonePicker
            />
        </div>
        
         <div className='chat-footer'>
             <div className="chat-box--pre">
                 <div className="chat-box--btn" 
                 onClick={handleEmojiClose} 
                 style={{width: emojiOpen ? 25 : 0}}>
                     <CloseIcon style={{color: '#919191'}}/>
                 </div>
                 <div className="chat-box--btn" onClick={handleEmojiOpen}>
                     <InsertEmoticonIcon style={{color: emojiOpen ? '#009688' :'#919191'}}/>
                 </div>
             </div>
             <div className='chat-box--inputarea'>
                <input 
                className='chat-box--input'
                type='text'
                placeholder='Digite uma mensagem'
                value={text}
                onChange={event => setText(event.target.value)}
                ></input>
            </div>

            <div className="chat-box--pos">
            {text === '' &&
                <div className="chat-box--btn" onClick={handleMicClick} >
                     <MicIcon style={{color: listening ? '#126ece' : '#919191'}}/>
                    </div>
                }
                {text !== '' &&
                <div onClick={handleSendClick} className="chat-box--btn">
                     <SendIcon style={{color: '#919191'}}/>
                 </div>
                }   
                 
            </div>
         </div>
         </div>
    )
}