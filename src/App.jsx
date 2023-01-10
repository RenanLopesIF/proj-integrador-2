import React, { useState } from 'react';

import Post from './components/Post';
import Login from './components/component-login';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* <VStack width="600px">
        <Post />
      </VStack> */}
      <Login typeInput={"text"} placeholder={"Usuário"}/>
      <Login typeInput={"password"} placeholder={"Sua senha"}/>
    </div>
  );
}

export default App;
