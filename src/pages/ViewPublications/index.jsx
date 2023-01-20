import { Center, Flex, Box } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import LoadingSpinner from '../../components/LoadingSpinner';
import Post from '../../components/Post';
import IconUsuario from './../../components/iconeUser';

function ViewPublications() {
  const [events, setEvents] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getEvent() {
      try {
        const data = await axios.get('http://localhost:3005/events');
        setEvents(data.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    getEvent();
  }, []);

  if (loading)
    return (
      <Center>
        <LoadingSpinner />
      </Center>
    );

  return (
    <>
      <Flex alignItems="flex-end">
        <IconUsuario />
      </Flex>
      <Center>
        <Flex w="578px" flexDirection="column">
          {events.map((event) => (
            <Post event={event} />
          ))}
        </Flex>
      </Center>
    </>
  );
}

export default ViewPublications;
