import React from 'react';
import './App.css';

import ChatBox from './components/chatBox/chatBox';

function App() {
  return (
    <div className="App">
     <div className='chat-content'>
       <div className='celphone-cover'>
         <div className='cellphone-screen'>
     <ChatBox/>
     </div>
     <div className='cellphone-button'></div>
     </div>
    </div>
    
    </div>
  );
}

export default App;
