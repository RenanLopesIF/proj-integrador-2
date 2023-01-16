import { Box, Circle, Flex } from '@chakra-ui/react';
import React from 'react';
import ButtonSubmit from '../../components/ButtonSubmit';
import InputSenha from '../../components/InputSenha';
// import { ImKey } from 'react-icons/fa';

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
  // backgroundColor: 'blue',
  // justifyContent: 'space-around',
  gap: '4rem',
};

function EsqueceuSenha() {
  return (
    <Flex w={'100%'} h={'100vh'} justifyContent={'center'} alignItems={'center'} color={'black'}>
      <Box
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'flex-start'}
        w={'40vw'}
        h={'80vh'}
        backgroundColor={'white'}
      >
        <Box
          // backgroundColor={'red'}
          display={'flex'}
          justifyContent={'space-between'}
          flexDirection={'column'}
          w={'100%'}
          h={'45%'}
        >
          <h1 style={txtElogo}>
            <img src="../../../public/logo.svg" alt="" />
            LOGO MARCA
            {/* <ImKey /> */}
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
          h="50%"
          padding="30px 0 80px 0"
          gap="60px"
          // backgroundColor={'red'}
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

export default EsqueceuSenha;
