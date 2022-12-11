import React, { useState } from "react";
import {VStack} from '@chakra-ui/react'
import CardMain from "./components/cardMain";
import "./App.css"

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <VStack width='600px'>
        <CardMain/>
      </VStack>
    </div>
  );
}

export default App;
