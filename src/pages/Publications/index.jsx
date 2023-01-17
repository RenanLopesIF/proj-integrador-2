import { Box, Flex } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import BarraPesquisa from '../../components/BarraPesquisa';
import IconeUser from '../../components/iconeUser';
import Post from '../../components/Post';

function Publications() {
  const [partyEvent, setPartyEvent] = useState([]);

  useEffect(() => {
    async function getPartyEvent() {
      try {
        const data = await axios.get('http://localhost:3005/events');
        setPartyEvent(data.data);
      } catch (error) {
        console.log(error);
      }
    }

    getPartyEvent();
  }, []);

  return (
    <Box>
      <Flex alignItems={'center'} justifyContent="space-between" margin={'20px 25px 26px 25px'}>
        <BarraPesquisa text="Pesquise pela descrição do evento" />
        <IconeUser />
      </Flex>
      <Flex>{/* <Post /> */}</Flex>
    </Box>
  );
}

export default Publications;
