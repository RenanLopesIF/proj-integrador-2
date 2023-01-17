import { Box, Flex, Text } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import BarraPesquisa from '../../components/BarraPesquisa';
import IconeUser from '../../components/iconeUser';
import Post from '../../components/Post';
import ButtonSubmit from './../../components/ButtonSubmit';
import { toast } from 'react-toastify';

function Publications() {
  const [partyEvent, setPartyEvent] = useState([]);

  useEffect(() => {
    async function getPartyEvent() {
      try {
        const data = await axios.get('http://localhost:3005/events');
        setPartyEvent(data.data);
      } catch (error) {
        toast.error('Error :) Recarregue a página!', {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
      }
    }

    getPartyEvent();
  }, []);

  return (
    <Box width={'100%'} border={'1px solid red'} padding="20px 25px 26px 25px">
      <Flex alignItems={'center'} justifyContent="space-between" marginBottom={'26px'}>
        <BarraPesquisa text="Pesquise pela descrição do evento" />
        <IconeUser />
      </Flex>
      <Flex flexDirection={'row'} justifyContent="space-between" width="100%">
        <Flex flexDirection={'column'} width="578px" gap={'25px'}>
          {partyEvent.map((event) => (
            <Post event={event} />
          ))}
        </Flex>
        <Flex flexDirection={'column'} textAlign="center">
          <Flex border={'1px solid red'} flexDirection="column" alignItems="center" justifyContent={'center'}>
            <ButtonSubmit />
          </Flex>
          <Flex></Flex>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Publications;
