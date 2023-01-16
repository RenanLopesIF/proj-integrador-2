import { Box, Circle, Flex } from '@chakra-ui/react';
import React from 'react';
import ButtonSubmit from '../../components/ButtonSubmit';
// import CustomInput from '../../components/CustomInput';
import InputSenha from '../../components/InputSenha';

// import { MdSettings } from 'react-icons/md';
// Se der ruim, apaga tudo e coloca return <div></div>

const txtElogo = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#FC5185',
  gap: '1rem',
  fontSize: '25px',
  fontWeight: '400',
  lineHeight: '36px',
  // backgroundColor: 'red',
};
const txtEchave = {
  display: 'flex',
  width: '100%',
  height: '100px',
  // backgroundColor: 'blueviolet',
  alignItems: 'center',
  fontStyle: 'normal',
  color: 'black',
  fontSize: '25px',
  fontWeight: '400',
  lineHeight: '36px',
  // gap: '2rem',
};

function TesteLuan() {
  return (
    <Flex w={'100%'} h={'100vh'} justifyContent={'center'} alignItems={'center'} color={'black'}>
      <Box
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'flex-start'}
        w={'40vw'}
        h={'85vh'}
        backgroundColor={'white'}
      >
        <Box display={'flex'} justifyContent={'space-between'} flexDirection={'column'} w={'100%'} h={'30%'}>
          <h1 style={txtElogo}>
            <img src="../../../public/logo.svg" alt="" /> LOGO MARCA
          </h1>
          <h1 style={txtEchave}>
            <img src="../../../public/chave.svg" alt="" /> Recuperar sua senha
          </h1>
        </Box>
        <Box
          display={'flex'}
          justifyContent={'center'}
          flexDirection={'column'}
          fontSize={'1.2rem'}
          w="100%"
          h="40%"
          gap="60px"
          // backgroundColor="blue"
        >
          <InputSenha text={'Nova senha'} placeholder={'4 ou mais caracteres'} />
          <InputSenha text={'Confirme senha'} placeholder={'Mesma que a nova senha acima'} />
        </Box>
        <Box display={'flex'} w={'100%'} h={'30%'} alignItems={'center'} paddingLeft={'2rem'}>
          <ButtonSubmit text={'Recuperar'} color={'#FFF'} background={'#FC5185'} />
          <Box display={'flex'} marginTop="1.7rem" justifyContent="space-around" w="140px">
            <Circle w={'1.4rem'} h={'1.4rem'} background={'#FC5185'} />
            <Circle w={'1.4rem'} h={'1.4rem'} background={'#FC5185'} />
            <Circle w={'1.4rem'} h={'1.4rem'} background={'#FC5185'} />
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}

export default TesteLuan;
