import React, { useEffect, useState } from 'react';
import { VStack, Box, Text } from '@chakra-ui/react';
import Post from './components/Post';
import './App.css';
import axios from 'axios';
import LoadingSpinner from './components/LoadingSpinner';
import ModalAddressDetails from './components/ModalAddressDetails';
import { Map, Source } from 'react-map-gl';
import ModalCreateEvent from './components/ModalCreateEvent';
import SideBar from './components/SideBar';
import Layout from './components/Layout';
import TelaRecuperarSenhaInformarEmail from './pages/TelaRecuperarSenhaInformarEmail';

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
      <TelaRecuperarSenhaInformarEmail />
      {/* <Layout>
        <VStack bgColor="red.400" h="150px" w="100px">
          <Text>AA</Text>
          <Text>BB</Text>
          <Text>CC</Text>
          <Text>DD</Text>
        </VStack>
      </Layout> */}
    </div>
  );
}

export default App;
