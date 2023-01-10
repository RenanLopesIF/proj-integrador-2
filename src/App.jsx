import React, { useState } from 'react';

import Post from './components/Post';
import Login from './components/component-login';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Login typeInput={"text"} placeholder={"Usuário"}/>
      <Login typeInput={"password"} placeholder={"Sua senha"}/>
    </div>
  );
}

export default App;
