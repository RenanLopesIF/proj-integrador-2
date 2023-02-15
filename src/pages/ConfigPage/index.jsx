import { useCallback, useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import IconeUser from '../../components/iconeUser';
import CustomSlider from './../../components/CustomSlider';
import { Badge, Box, Flex, Heading, Text } from '@chakra-ui/react';
import { useAuth } from '../../hooks/auth';
import api from '../../services/axios';

function ConfigPage() {
  const { isAuthed, userData } = useAuth();

  const distanceData = [
    { label: '1km', value: 1 },
    { label: '50km', value: 50 },
    { label: '100km', value: 100 },
  ];

  const daysData = [
    { label: '1d', value: 1 },
    { label: '182d', value: 182 },
    { label: '365d', value: 365 },
  ];

  const [userSettings, setUserSettings] = useState({
    maxDistance: 30,
    maxDays: 30,
  });

  const getUserConfig = useCallback(async () => {
    const res = await api.get(`/usuario/configuracoes/${userData.ID}`);
    setUserSettings({
      maxDays: res.data[0].data_maxima,
      maxDistance: res.data[0].distancia_maxima,
    });
  }, [userData]);

  async function handleDistance(value) {
    setUserSettings((prev) => ({ ...prev, maxDistance: value }));
    await api.put('/usuario/atualizar/configuracoes', {
      userId: userData.ID,
      maxDistance: value,
      maxDate: userSettings.maxDays,
    });
  }

  async function handleDays(value) {
    setUserSettings((prev) => ({ ...prev, maxDays: value }));
    await api.put('/usuario/atualizar/configuracoes', {
      userId: userData.ID,
      maxDistance: userSettings.maxDistance,
      maxDate: value,
    });
  }

  useEffect(() => {
    if (isAuthed) {
      getUserConfig();
    } else {
      setUserSettings({
        maxDistance: 30,
        maxDays: 30,
      });
    }
  }, [userData]);

  return (
    <Layout>
      <Flex
        flexDirection={'column'}
        alignItems="flex-end"
        justifyContent={'flex-end'}
        gap="30px"
        paddingTop={'16px'}
        px="20"
        height="100%"
      >
        <IconeUser />
        <Box bg={'#FFFFFF'} width="100%" height={'100%'} borderTopLeftRadius="20px">
          <Heading as={'h2'} fontWeight="700" fontSize={'40px'} lineHeight="58px" color={'secondary.600'}>
            Configurações
          </Heading>
          {!isAuthed && (
            <Badge w="full" borderRadius={4} px={2} py={4} mt={10} opacity={0.8} colorScheme={'yellow'}>
              Você precisa estar logado para alterar as configurações
            </Badge>
          )}

          <Flex marginTop="35px" flexDirection={'column'}>
            <Box
              width="100%"
              marginBottom={'75px'}
              h="140px"
              padding={'15px 60px 0 30px'}
              bg={'cinza.50'}
              borderRadius="5px"
            >
              <Text fontWeight={'400'} fontSize="24px" lineHeight={'29px'} color={'secondary.600'}>
                Distância máxima do evento:
              </Text>
              <CustomSlider
                isDisabled={!isAuthed}
                data={distanceData}
                acronymDistance="km"
                min={1}
                max={100}
                value={userSettings.maxDistance}
                onChange={handleDistance}
              />
            </Box>
            <Box width="100%" h="140px" padding={'15px 60px 0 30px'} bg={'cinza.50'} borderRadius="5px">
              <Text fontWeight={'400'} fontSize="24px" lineHeight={'29px'} color={'secondary.600'}>
                Exiber eventos em até:
              </Text>
              <CustomSlider
                isDisabled={!isAuthed}
                data={daysData}
                acronymDistance="d"
                min={1}
                max={365}
                value={userSettings.maxDays}
                onChange={handleDays}
              />
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Layout>
  );
}

export default ConfigPage;
