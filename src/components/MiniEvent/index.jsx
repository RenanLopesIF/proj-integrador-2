import { Flex, Text, Image, Box, useTheme, Grid, GridItem } from '@chakra-ui/react';
import ButtonSubmit from '../ButtonSubmit';
import { CiLocationOn } from 'react-icons/ci';
import Faixaetaria from '../FaixaEtaria';
import { getDateDiff } from '../../utils/getDateDiff';
import { useNavigate } from 'react-router';

function MiniEvent({ distance, event }) {
  const { colors } = useTheme();
  const navigate = useNavigate();
  return (
    <Flex width="100%" flexDirection={'column'} textAlign="center">
      <Text fontWeight="400" fontSize="20px" lineHeight="24px" color="cinza.300">
        Evento em destaque
      </Text>
      <Grid
        mt={3}
        templateColumns="0.2fr 1fr"
        gap={3}
        bg="#FFF"
        padding="20px 12px"
        borderRadius="10px"
        filter="drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.25))"
        border="1px solid #FF9900"
      >
        <GridItem width="100px" bgColor={event.url_imagem ? 'white' : 'gray.300'}>
          {event.url_imagem && <Image src={`http://localhost:3004/${event.url_imagem}`} />}
        </GridItem>
        <GridItem width="100%" textAlign="left">
          <Flex flexDir="column" justifyContent="space-between" h="full" w="full">
            <Box>
              <Flex alignItems="center" justifyContent="space-between">
                <Text fontWeight="400" fontSize="14px" lineHeight="17px" color={colors.secondary[900]}>
                  {event.usuario_nome}
                </Text>
                <Faixaetaria label="l" color="yellow.300" />
              </Flex>
              <Text fontWeight="400" fontSize="10px" lineHeight="12px" color={colors.cinza[400]}>
                {getDateDiff(event.criado_em)}
              </Text>
              <Flex alignItems="center">
                <Text fontWeight="400" fontSize="10px" lineHeight="12px" color={colors.cinza[400]}>
                  Em {event.cidade}, à {distance}
                </Text>
                <CiLocationOn />
              </Flex>
              <Text color="secondary.600" fontSize={22} fontWeight={600}>
                {event.titulo}
              </Text>
            </Box>
            <Box w="full">
              <ButtonSubmit
                onClick={() => {
                  navigate(`/publicacao/${event.ID}`);
                }}
                text="Mais informações"
                background={colors.primary[300]}
                color="#FFF"
              />
            </Box>
          </Flex>
        </GridItem>
      </Grid>
    </Flex>
  );
}

export default MiniEvent;
