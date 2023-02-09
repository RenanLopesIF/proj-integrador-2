import React, { useEffect, useRef } from 'react';
import { Box, Flex, Link } from '@chakra-ui/react';
import Custominput from '../../components/CustomInput';
import InputEsquecSenha from '../../components/InputEsquecSenha';
import ButtonSubmit from '../../components/ButtonSubmit';
import api from '../../services/axios';
import { useAuth } from '../../hooks/auth';

function TelaLogin() {
  const formRef = useRef();
  const { login, isAuthed } = useAuth();

  async function onLogin() {
    const ev = formRef.current;
    const form = new FormData(ev);
    const formData = Object.fromEntries(form);

    await login(formData.login, formData.senha);

    console.log(formData);
  }

  useEffect(() => {
    if (isAuthed) window.history.back();
  }, [isAuthed]);

  return (
    <Box>
      <Box backgroundColor="primary.300" height="140px" p={4}>
        <Link href="/" fontWeight="500" color="white">
          Voltar
        </Link>
      </Box>
      <Flex flexDirection={'column'} alignItems="center" width={'100%'} height={'100%'} marginTop={'7%'}>
        <Box>
          <img src="/src/assets/logotipo.png" />
        </Box>
        <Box
          as="form"
          ref={formRef}
          gap={'100px'}
          width={'50%'}
          display={'flex'}
          justifyContent={'center'}
          marginTop={'2%'}
        >
          <Custominput inputName="login" typeInput="text" placeholder="Usuário" mr={10} />
          <Custominput inputName="senha" typeInput="password" hasIcon={true} placeholder="Senha" ml={10} />
        </Box>
        <Box width={'20%'} marginTop={'5%'}>
          <ButtonSubmit text={'ENTRAR'} onClick={onLogin} />
        </Box>
        <Box marginTop={'3%'}>
          <InputEsquecSenha width={'50%'} justifyContent={'center'} />
        </Box>
        <Box display={'flex'} fontSize={'90%'} marginTop={'4px'}>
          <Box marginRight="10px" color="#364F6B" fontWeight="500">
            AINDA NÃO TEM CONTA?
          </Box>
          <Link href="/cadastrar" fontWeight="500" color="primary.300">
            CADASTRA-SE
          </Link>
        </Box>
      </Flex>
    </Box>
  );
}
export default TelaLogin;
