import { Box, Center, Divider, Flex, Grid, GridItem, Text, useDisclosure, useTheme } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import BarraPesquisa from '../../components/BarraPesquisa';
import IconeUser from '../../components/iconeUser';
import Post from '../../components/Post';
import ButtonSubmit from './../../components/ButtonSubmit';
import MiniEvent from '../../components/MiniEvent';
import LoadingSpinner from '../../components/LoadingSpinner';
import Layout from '../../components/Layout';
import ModalCreateEvent from '../../components/ModalCreateEvent';
import { useGeolocation } from '../../hooks/geolocation';
import api from '../../services/axios';
import { useAuth } from '../../hooks/auth';
import { toast } from 'react-toastify';
import { convertEventDistance } from '../../utils/convertEventDistance';

function Publications() {
  const { colors } = useTheme();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { currentGeolocation } = useGeolocation();
  const { isAuthed } = useAuth();

  const [partyEvent, setPartyEvent] = useState([]);
  const [partyEspecifyEvent, setPartyEspecifyEvent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const filterSech = (textSeach) => {
    const filtedEvents = partyEvent.filter((existsParty) =>
      existsParty.descricao.toLowerCase().includes(textSeach.toLowerCase()),
    );
    setPartyEspecifyEvent(filtedEvents);
  };

  function handlePublicEvent() {
    if (!isAuthed) {
      toast.warn('Você precisa estar logado para publicar um evento');
      return;
    }
    onOpen();
  }

  async function getPartyEvent() {
    if (currentGeolocation.lat && currentGeolocation.lng) {
      try {
        const data = await api.get(
          `http://localhost:3004/eventos?lat=${currentGeolocation.lat}&lng=${currentGeolocation.lng}`,
        );
        setPartyEvent(data.data);
        setPartyEspecifyEvent(data.data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
  }

  useEffect(() => {
    getPartyEvent();
  }, [currentGeolocation]);

  if (loading)
    return (
      <Layout>
        <Center width={'100%'} height="100%">
          <LoadingSpinner />;
        </Center>
      </Layout>
    );

  return (
    <Layout>
      <Grid minH="full" bgColor="cinza.50" pl="10%" pr={10} py={5} gridAutoRows="1fr" gridTemplateColumns="1fr 0.45fr">
        <GridItem>
          <Box width={'100%'}>
            <Flex alignItems={'center'} justifyContent="space-between" marginBottom={'26px'}>
              <BarraPesquisa text="Pesquise pela descrição do evento" seachPost={filterSech} />
            </Flex>

            <Flex flexDirection={'column'} width="578px" gap={'25px'}>
              {error ? (
                <Center w="100%" h="100%">
                  <Text textAlign="center" fontWeight="900" color="red.500" fontSize="30px">
                    Não foi possível carregar as publicações
                  </Text>
                </Center>
              ) : partyEspecifyEvent.length > 0 ? (
                partyEspecifyEvent.map((event) => <Post key={event.ID} refetch={getPartyEvent} event={event} />)
              ) : (
                <Center w="100%" h="100%">
                  <Text fontWeight="900" fontSize="30px" color="secondary.600">
                    Nenhuma publicação foi encontrada
                  </Text>
                </Center>
              )}
            </Flex>
          </Box>
        </GridItem>

        <GridItem>
          <Box position="fixed" pr={20}>
            <Flex w="full" mb="26px" justifyContent="right">
              <IconeUser />
            </Flex>
            <Flex
              padding={5}
              mt={16}
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
              <ButtonSubmit
                onClick={handlePublicEvent}
                text="PUBLICAR MEU EVENTO"
                background={colors.primary[300]}
                color="#FFFFFF"
              />
            </Flex>

            <Center>
              <Divider w="80%" py="3" borderColor="secondary.600" opacity={0.3} borderBottomWidth={2} />
            </Center>

            {partyEvent.length > 0 && (
              <Box mt={12}>
                <MiniEvent
                  event={partyEvent[0]}
                  city="Salinas"
                  distance={convertEventDistance(partyEvent[0].distancia)}
                />
              </Box>
            )}
          </Box>
        </GridItem>
      </Grid>
      <ModalCreateEvent isOpen={isOpen} onClose={onClose} />
    </Layout>
  );
}

export default Publications;
