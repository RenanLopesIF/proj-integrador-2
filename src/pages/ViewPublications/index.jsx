import { Center, Flex, Box, Text } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import LoadingSpinner from '../../components/LoadingSpinner';
import Post from '../../components/Post';
import IconUsuario from './../../components/iconeUser';
import { useParams } from 'react-router';
import Layout from '../../components/Layout';

function ViewPublications() {
  const [event, setEvent] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const { id: publicationId } = useParams();

  useEffect(() => {
    async function getEvent() {
      try {
        const data = await axios.get(`http://localhost:3005/event/${publicationId}`);
        setEvent(data.data);
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
      <Layout>
        <Center w="100%" h="100%">
          <LoadingSpinner />
        </Center>
      </Layout>
    );
  if (error || !event) {
    return (
      <Layout>
        <Center w="100%" h="100%">
          <Text fontWeight="900" fontSize="30px">
            Publicação não encontrada
          </Text>
        </Center>
      </Layout>
    );
  }

  return (
    <Layout>
      <Box padding="20px 25px 26px 25px" bgColor="cinza.50">
        <Flex w="full" alignItems="center" justifyContent="flex-end">
          <Box>
            <IconUsuario />
          </Box>
        </Flex>
        <Center>
          <Flex w="578px" flexDirection="column" gap="20px">
            <Post event={event} />
          </Flex>
        </Center>
      </Box>
    </Layout>
  );
}

export default ViewPublications;
