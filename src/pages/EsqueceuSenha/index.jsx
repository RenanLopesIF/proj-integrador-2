import { Box, Circle, Flex } from '@chakra-ui/react';
import React from 'react';
import ButtonSubmit from '../../components/ButtonSubmit';
import InputSenha from '../../components/InputSenha';
import { HiOutlineKey } from 'react-icons/hi';

const txtElogo = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#FC5185',
  gap: '1rem',
  fontSize: '20px',
  fontWeight: '400',
  lineHeight: '36px',
};
const txtEchave = {
  display: 'flex',
  width: '100%',
  height: '100px',
  alignItems: 'center',
  fontStyle: 'normal',
  color: 'black',
  fontSize: '23px',
  fontWeight: '400',
  lineHeight: '36px',
  gap: '5.5rem',
  marginLeft: '30px',
};

function EsqueceuSenha() {
  return (
    <Flex bgColor={'red'} w={'100%'} h={'100vh'} justifyContent={'center'} alignItems={'center'} color={'black'}>
      <Box
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'flex-start'}
        w={'45%'}
        h={'50%'}
      >
        <Box
          display={'flex'}
          backgroundColor={'yellow'}
          justifyContent={'space-between'}
          flexDirection={'column'}
          w={'100%'}
          h={'45%'}
        >
          <h1 style={txtElogo}>
            <img src="../../../public/logo.svg" alt="" />
            LOGO MARCA
          </h1>
          <h2 style={txtEchave}>
            <HiOutlineKey size={'100'} />
            Recuperar sua senha
          </h2>
        </Box>
        <Box
          display={'flex'}
          justifyContent={'center'}
          flexDirection={'column'}
          fontSize={'1.2rem'}
          w="100%"
          h="100%"
          padding="30px 0 80px 0"
          gap="60px"
          backgroundColor={'blue'}
        >
          <InputSenha text={'Nova senha'} placeholder={'4 ou mais caracteres'} />
          <InputSenha text={'Confirme senha'} placeholder={'Mesma que a nova senha acima'} />
        </Box>
        <Box display={'flex'} w={'100%'} h={'40%'} alignItems={'center'} paddingLeft={'2rem'}>
          <ButtonSubmit text={'Recuperar'} color={'#FFF'} background={'#FC5185'} />
          <Box display={'flex'} marginTop="1.7rem" justifyContent="space-around" w="140px">
            <Circle w={'1.4rem'} h={'1.4rem'} background="primary.300" />
            <Circle w={'1.4rem'} h={'1.4rem'} background={'#FC5185'} />
            <Circle w={'1.4rem'} h={'1.4rem'} background={'#FC5185'} />
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}

export default EsqueceuSenha;
