import React, { useState } from 'react';
import {
  VStack
} from '@chakra-ui/react'
import Post from './components/Post';
import SliderThumbWithTooltip from './components/Slider';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* <VStack width="600px">
        <Post />
      </VStack> */}
      <SliderThumbWithTooltip />
    </div>
  );
}

export default App;
