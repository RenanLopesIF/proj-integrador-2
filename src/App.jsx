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
  const [loading, setLoading] = useState(true);

  const [modalOpen, setModalOpen] = useState(true);

  function onCloseModal() {
    setModalOpen(false);
  }

  const url = 'http://localhost:3005/events';

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(url);
      setEvents(data);
      setLoading(false);
    })();
  }, []);

  if (loading) return <LoadingSpinner />;

  return (
    <div className="App">
      <VStack width="600px">
        {events.map((event, idx) => (
          <Post event={event} key={idx} />
        ))}
        <ModalAddressDetails
          LatLng={{ lat: -16.992218476360074, lng: -42.35898430325603 }}
          isOpen={modalOpen}
          onClose={onCloseModal}
          autoAddress={events[0].display_address_name}
          address={events[0].display_address_name}
        />
      </VStack>
    </div>
  );
}

export default App;
