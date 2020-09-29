import React, { useState } from 'react';
import './App.css';

import ChatBox from './components/chatBox/chatBox';

function App() {
  const [user, setUser] = useState({
    id: 1
  })

  return (
    <div className="App">
     <div className='chat-content'>
       <div className='celphone-cover'>
         <div className='cellphone-screen'>
     <ChatBox
      user={user}
      />
     </div>
     <div className='cellphone-button'></div>
     </div>
    </div>
    
    </div>
  );
}

export default App;
