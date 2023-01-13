import React, { useEffect, useState } from 'react';
import { VStack, Box } from '@chakra-ui/react';
import Post from './components/Post';
import './App.css';
import axios from 'axios';
import LoadingSpinner from './components/LoadingSpinner';
import ModalAddressDetails from './components/ModalAddressDetails';
import { Map, Source } from 'react-map-gl';

function App() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);

  const [modalOpen, setModalOpen] = useState(true);

  function onCloseModal() {
    setModalOpen(false);
  }

  const url = 'http://localhost:3005/events';

  // useEffect(() => {
  //   (async () => {
  //     const { data } = await axios.get(url);
  //     setEvents(data);
  //     setLoading(false);
  //   })();
  // }, []);

  if (loading) return <LoadingSpinner />;

  return (
    <div className="App">
      <VStack width="600px">Página inicial</VStack>
    </div>
  );
}

export default App;
