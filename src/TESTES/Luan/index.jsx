import { Box, Circle } from '@chakra-ui/react';
import React from 'react';
import ButtonSubmit from '../../components/ButtonSubmit';
// import CustomInput from '../../components/CustomInput';
import InputSenha from '../../components/InputSenha';

// import { MdSettings } from 'react-icons/md';
// Se der ruim, apaga tudo e coloca return <div></div>
const father = {
  // backgroundColor: 'red',
  with: '100%',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  // backgroundColor: 'red',
  alignItems: 'center',
  color: 'black',
};
const componentes = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  width: '40vw',
  height: '80vh',
  backgroundColor: 'white',
};
const text = {
  display: 'flex',
  justifyContent: 'end',
  flexDirection: 'column',
  width: '100%',
  height: '30%',
  // backgroundColor: 'gray',
  // fontSize: '20px',
};

const txtElogo = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#FC5185',
  gap: '1rem',
  fontSize: '30px',
  fontWeight: '400',
  lineHeight: '36px',
};
const txtEchave = {
  display: 'flex',
  width: '100%',
  height: '100px',
  // backgroundColor: 'blueviolet',
  alignItems: 'center',
  fontStyle: 'normal',
  color: 'black',
  fontSize: '30px',
  fontWeight: '400',
  lineHeight: '36px',
  gap: '2rem',
};

const inputs = {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  fontSize: '1.2rem',
  width: '100%',
  height: '30%',
  // backgroundColor: 'blue',
  gap: '70px',
};

function TesteLuan() {
  return (
    <div style={father}>
      <Box style={componentes}>
        <Box style={text}>
          <h1 style={txtElogo}>
            <img src="../../../public/logo.svg" alt="" /> LOGO MARCA
          </h1>
          <h1 style={txtEchave}>
            <img src="../../../public/chave.svg" alt="" /> Recuperar sua senha
          </h1>
        </Box>
        <Box style={inputs}>
          <InputSenha text={'Nova senha'} placeholder={'4 ou mais caracteres'} />
          <InputSenha text={'Confirme senha'} placeholder={'Mesma que a nova senha acima'} />
        </Box>
        <Box display={'flex'} w={'100%'} h={'30%'} alignItems={'center'} paddingLeft={'2rem'}>
          <ButtonSubmit text={'Recuperar'} color={'#FFF'} background={'#FC5185'} />
          <Box display={'flex'} marginTop="2.8rem" justifyContent="space-around" w="140px">
            <Circle w={'1.4rem'} h={'1.4rem'} background={'#FC5185'} />
            <Circle w={'1.4rem'} h={'1.4rem'} background={'#FC5185'} />
            <Circle w={'1.4rem'} h={'1.4rem'} background={'#FC5185'} />
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default TesteLuan;
