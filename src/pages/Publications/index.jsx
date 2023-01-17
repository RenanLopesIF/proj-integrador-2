import { Box, Center, Flex, Heading, Text, useTheme } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import BarraPesquisa from '../../components/BarraPesquisa';
import IconeUser from '../../components/iconeUser';
import Post from '../../components/Post';
import ButtonSubmit from './../../components/ButtonSubmit';
// import { toast } from 'react-toastify';
import LoadingSpinner from '../../components/LoadingSpinner';

function Publications() {
  const [partyEvent, setPartyEvent] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(false);

  const { colors } = useTheme();

  useEffect(() => {
    async function getPartyEvent() {
      try {
        const data = await axios.get('http://localhost:3005/events');
        setPartyEvent(data.data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    getPartyEvent();
  }, []);

  if (loading)
    return (
      <Center width={'100%'} height="100%">
        <LoadingSpinner />;
      </Center>
    );
  if (error)
    return (
      <Center width={'100%'} height="100%">
        <Heading as={'h1'}>Error :)</Heading>;
      </Center>
    );

  return (
    <Box width={'100%'} padding="20px 25px 26px 25px">
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
        <Flex flexDirection={'column'} textAlign="center" marginTop={'1px'}>
          <Flex
            padding={'20px 30px'}
            flexDirection="column"
            alignItems="center"
            justifyContent={'center'}
            borderRadius="10px"
            bg={'#FFFFFF'}
            filter={'drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.25))'}
          >
            <Text
              textTransform={'uppercase'}
              fontSize="20px"
              fontWeight={'600'}
              lineHeight={'24px'}
              color={colors.secondary[900]}
              marginBottom="22px"
            >
              Qual é a boa de hoje?
            </Text>
            <ButtonSubmit text="PUBLICAR MEU EVENTO" background={colors.primary[300]} color="#FFFFFF" />
          </Flex>
          <Flex></Flex>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Publications;
