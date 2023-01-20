import { Flex, Text, Image, Box, VStack, useTheme, color } from '@chakra-ui/react';
import ButtonSubmit from '../../../components/ButtonSubmit';
import { CiLocationOn } from 'react-icons/ci';

function MiniEvent({ src, autor, title }) {
  const { colors } = useTheme();
  return (
    <>
      <Flex width="100%" flexDirection={'column'} textAlign="center" marginTop={'1px'}>
        <Text fontWeight="400" fontSize="20px" lineHeight="24px" color={colors.cinza[500]}>
          Evento em destaque
        </Text>
        <Flex
          w="350px"
          h="200px"
          padding="20px 0"
          flexDirection="row"
          alignItems="center"
          justifyContent={'center'}
          gap="10px"
          borderRadius="10px"
          bg={'#FFFFFF'}
          filter={'drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.25))'}
        >
          <Box width="85px">
            <Image src={src} />
          </Box>
          <Box textAlign="left" paddingBlock="20px" width={'200px'}>
            <Flex justifyContent="space-between">
              <Box>
                <Text fontWeight="400" fontSize="14px" lineHeight="17px" color={colors.secondary[900]}>
                  Renan Lopes
                </Text>
                <Text fontWeight="400" fontSize="10px" lineHeight="12px" color={colors.cinza[400]}>
                  3 dias atrás
                </Text>
                <Flex alignItems="center">
                  <Text fontWeight="400" fontSize="10px" lineHeight="12px" color={colors.cinza[400]}>
                    Em Salinas, à 178km
                  </Text>
                  <CiLocationOn />
                </Flex>
              </Box>
              <Text fontWeight="700" fontStyle="14px" lineHeight="17px" bg="yellow" color="#FFF" height="20px">
                +12
              </Text>
            </Flex>
            <Text fontWeight="700" fontSize="22px" lineHeight="27px" color={colors.azulClaro[800]} marginBottom="25px">
              Festa Fim de Ano Afipea
            </Text>
            <ButtonSubmit text="MAIS INFORMAÇÕES" background={colors.primary[300]} color="#FFF" />
          </Box>
        </Flex>
      </Flex>
    </>
  );
}

export default MiniEvent;
