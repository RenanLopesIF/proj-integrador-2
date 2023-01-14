import React, { useState } from 'react';
import { VStack } from '@chakra-ui/react';
import Post from './components/Post';
import CustomInput from './components/CustomInput';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* <VStack width="600px">
        <Post />
      </VStack> */}
      <CustomInput typeInput="text" placeholder="Usuário" />
      <CustomInput typeInput="password" placeholder="Sua senha" />
    </div>
  );
}

export default App;
