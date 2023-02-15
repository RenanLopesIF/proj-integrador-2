import { Box, Center, Circle, Flex, Text } from '@chakra-ui/react';
import React, { useRef } from 'react';
import ButtonSubmit from '../../components/ButtonSubmit';
import InputSenha from '../../components/InputSenha';
import { HiOutlineKey } from 'react-icons/hi';
import api from '../../services/axios';
import { toast } from 'react-toastify';
import ButtonBack from '../../components/ButtonBack';

function RecuperarSenhaInformarEmail() {
  const formRef = useRef();
  async function submitEmail() {
    const ev = formRef.current;
    const form = new FormData(ev);
    const formData = Object.fromEntries(form);

    try {
      await api.post('/auth/recuperar-senha', formData);
      toast.info('Seu email foi enviado com sucesso. Você receberá um link para alterar sua senha');
    } catch (error) {
      toast.error('Ocorreu um erro ao tentar enviar email');
    }
  }

  return (
    <Box>
      <Box backgroundColor="primary.300" height="140px" p={4}>
        <ButtonBack href="/login" />
      </Box>
      <Flex mt={16} w={'100%'} h={'full'} justifyContent={'center'} alignItems={'center'} color={'black'}>
        <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'flex-start'} w={'45%'}>
          <Box w={'100%'} padding={'3'}>
            <Box display={'flex'} alignItems={'center'} w={'100%'} h={'50%'}>
              <Center paddingLeft={'25px'} w={'25%'}>
                <HiOutlineKey size={'100'} />
              </Center>
              <Box display={'flex'} flexDirection={'column'} paddingLeft={'55px'} alignItems={'center'}>
                <Text
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  color="primary.300"
                  gap="1rem"
                  fontSize="20px"
                  fontWeight="400"
                  lineHeight="36px"
                >
                  <img src="../../../public/logo.svg" alt="" />
                  FestFinder
                </Text>
                <Text
                  display="flex"
                  width="100%"
                  height="100px"
                  alignItems="center"
                  fontStyle="normal"
                  color="black"
                  fontSize="23px"
                  fontWeight="400"
                  lineHeight="36px"
                >
                  Recuperar sua senha
                </Text>
              </Box>
            </Box>
            <Box
              ref={formRef}
              as="form"
              display={'flex'}
              justifyContent={'center'}
              flexDirection={'column'}
              fontSize={'1.2rem'}
              w="100%"
              h="100%"
              padding="30px 0 80px 0"
              gap="60px"
            >
              <InputSenha inputName="email" text={'Digite seu E-mail'} placeholder={'Confirme seu E-mail'} />
            </Box>
          </Box>
          <Box display={'flex'} w={'100%'} h={'40%'} alignItems={'center'} paddingLeft={'2.5rem'}>
            <ButtonSubmit onClick={submitEmail} text={'Recuperar'} />
            <Box display={'flex'} marginTop="1.7rem" justifyContent="space-around" w="140px">
              <Circle w={'1.4rem'} h={'1.4rem'} background="primary.300" />
              <Circle w={'1.4rem'} h={'1.4rem'} background={'primary.300'} />
              <Circle w={'1.4rem'} h={'1.4rem'} background={'primary.300'} />
            </Box>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}

export default RecuperarSenhaInformarEmail;
