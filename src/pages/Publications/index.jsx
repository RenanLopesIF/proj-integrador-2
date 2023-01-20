import { Box, Center, Flex, Heading, Text, useTheme } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import BarraPesquisa from '../../components/BarraPesquisa';
import IconeUser from '../../components/iconeUser';
import Post from '../../components/Post';
import ButtonSubmit from './../../components/ButtonSubmit';
import MiniEvent from './MiniEvent';
import LoadingSpinner from '../../components/LoadingSpinner';

function Publications() {
  const [partyEvent, setPartyEvent] = useState([]);

  const [partyEspecifyEvent, setPartyEspecifyEvent] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(false);

  const { colors } = useTheme();

  const filterSech = (textSeach) => {
    const filtedEvents = partyEvent.filter((existsParty) => existsParty.description.includes(textSeach));
    setPartyEspecifyEvent(filtedEvents);
  };

  useEffect(() => {
    async function getPartyEvent() {
      try {
        const data = await axios.get('http://localhost:3005/events');
        setPartyEvent(data.data);
        setPartyEspecifyEvent(data.data);
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
        <BarraPesquisa text="Pesquise pela descrição do evento" seachPost={filterSech} />
        <IconeUser />
      </Flex>
      <Flex flexDirection={'row'} justifyContent="space-between" width="100%">
        <Flex flexDirection={'column'} width="578px" gap={'25px'}>
          {partyEspecifyEvent.map((event) => (
            <Post event={event} />
          ))}
        </Flex>
        <Flex flexDirection={'column'} alignItems="center" gap="100px">
          <Flex flexDirection={'column'} textAlign="center" marginTop={'1px'}>
            <Flex
              padding={'40px 60px'}
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
          </Flex>
          <MiniEvent
            src={partyEspecifyEvent[0].image}
            autor={partyEspecifyEvent[0].autor.name}
            title={partyEspecifyEvent[0].title}
          />
        </Flex>
      </Flex>
    </Box>
  );
}

export default Publications;
