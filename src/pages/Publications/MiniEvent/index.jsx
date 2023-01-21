import { Flex, Text, Image, Box, useTheme, Grid, GridItem } from '@chakra-ui/react';
import ButtonSubmit from '../../../components/ButtonSubmit';
import { CiLocationOn } from 'react-icons/ci';
import Faixaetaria from '../../../components/FaixaEtaria';

function MiniEvent({ src, autor, title }) {
  const { colors } = useTheme();
  return (
    <>
      <Flex width="70%" flexDirection={'column'} textAlign="center" marginTop={'1px'}>
        <Text fontWeight="400" fontSize="20px" lineHeight="24px" color={colors.cinza[500]}>
          Evento em destaque
        </Text>
        <Grid
          templateColumns="0.2fr 1fr"
          gap={3}
          bg="#FFF"
          padding="20px 12px"
          borderRadius="10px"
          filter="drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.25))"
        >
          <GridItem width="100px">
            <Image src={src} />
          </GridItem>
          <GridItem width="100%" textAlign="left">
            <Flex alignItems="center" justifyContent="space-between">
              <Text fontWeight="400" fontSize="14px" lineHeight="17px" color={colors.secondary[900]}>
                {autor}
              </Text>
              <Faixaetaria label="+12" color="yellow" />
            </Flex>
            <Text fontWeight="400" fontSize="10px" lineHeight="12px" color={colors.cinza[400]}>
              3 dias atrás
            </Text>
            <Flex marginBlock="5px">
              <Text fontWeight="400" fontSize="10px" lineHeight="12px" color={colors.cinza[400]}>
                Em Salinas, à 178km
              </Text>
              <CiLocationOn />
            </Flex>
            <ButtonSubmit text="MAIS INFORMAÇÕES" background={colors.primary[300]} color="#FFF" />
          </GridItem>
        </Grid>
      </Flex>
    </>
  );
}

export default MiniEvent;
