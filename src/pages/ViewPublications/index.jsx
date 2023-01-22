import { Center, Flex, Box, Text } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import LoadingSpinner from '../../components/LoadingSpinner';
import Post from '../../components/Post';
import IconUsuario from './../../components/iconeUser';

function ViewPublications() {
  const [events, setEvents] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(false);

  useEffect(() => {
    async function getEvent() {
      try {
        const data = await axios.get('http://localhost:3005/events');
        setEvents(data.data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    getEvent();
  }, []);

  if (loading)
    return (
      <Center w="100%" h="100%">
        <LoadingSpinner />
      </Center>
    );
  if (error) {
    return (
      <Center w="100%" h="100%">
        <Text fontWeight="900" fontSize="30px">
          Desculpe, algo deu erro:)
        </Text>
      </Center>
    );
  }

  return (
    <Box padding="20px 25px 26px 25px">
      <Flex textAlign="right" alignItems="center" justifyContent="space-between">
        ,
        <Box>
          <IconUsuario />
        </Box>
      </Flex>
      <Center>
        <Flex w="578px" flexDirection="column" gap="20px">
          {events.map((event) => (
            <Post event={event} />
          ))}
        </Flex>
      </Center>
    </Box>
  );
}

export default ViewPublications;
