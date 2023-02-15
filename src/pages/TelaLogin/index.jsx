import React, { useEffect, useRef } from 'react';
import { Box, Flex, Image, Link, Text } from '@chakra-ui/react';
import Custominput from '../../components/CustomInput';
import InputEsquecSenha from '../../components/InputEsquecSenha';
import ButtonSubmit from '../../components/ButtonSubmit';
import { useAuth } from '../../hooks/auth';
import ButtonBack from '../../components/ButtonBack';

function TelaLogin() {
  const formRef = useRef();
  const { login, isAuthed } = useAuth();

  async function onLogin() {
    const ev = formRef.current;
    const form = new FormData(ev);
    const formData = Object.fromEntries(form);

    await login(formData.login, formData.senha);
  }

  useEffect(() => {
    if (isAuthed) window.history.back();
  }, [isAuthed]);

  return (
    <Box>
      <Box backgroundColor="primary.300" height="140px" p={4}>
        <ButtonBack href="/" />
      </Box>
      <Flex flexDirection={'column'} alignItems="center" width={'100%'} height={'100%'} marginTop={'7%'}>
        <Flex alignItems="center" mb={2}>
          <Image w="60px" h="72px" src="FestFinder.png" />
          <Text ml={6} color="primary.300" fontWeight={500} fontSize={32}>
            FestFinder
          </Text>
        </Flex>
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
