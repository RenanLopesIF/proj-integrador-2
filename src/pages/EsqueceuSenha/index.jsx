import { Box, Center, Circle, Flex, Text } from '@chakra-ui/react';
import React, { useRef } from 'react';
import ButtonSubmit from '../../components/ButtonSubmit';
import InputSenha from '../../components/InputSenha';
import { HiOutlineKey } from 'react-icons/hi';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../services/axios';
import { toast } from 'react-toastify';

function EsqueceuSenha() {
  const formRef = useRef();
  const navigate = useNavigate();
  const { userIdToken } = useParams();

  async function handleSubmit() {
    const ev = formRef.current;
    const form = new FormData(ev);
    const formData = Object.fromEntries(form);

    if (formData.senha !== formData['confirmacao-senha']) {
      toast.error('Confirmação de senha não coincide');
      return;
    }

    try {
      await api.put(`/auth/recuperar-senha/nova-senha`, { senha: formData.senha, userIdToken });
      toast.success('Sua senha foi alterada com sucesso');
      setTimeout(() => {
        navigate('/login');
      }, 3300);
    } catch (error) {
      console.log(error);
      toast.error('Houve um erro ao tentar alterar sua senha');
    }
  }

  return (
    <Flex w={'100%'} h={'100vh'} justifyContent={'center'} alignItems={'center'} color={'black'}>
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
            as="form"
            ref={formRef}
            display={'flex'}
            justifyContent={'center'}
            flexDirection={'column'}
            fontSize={'1.2rem'}
            w="100%"
            h="100%"
            padding="30px 0 80px 0"
            gap="60px"
          >
            <InputSenha inputName="senha" text={'Nova senha'} placeholder={'4 ou mais caracteres'} />
            <InputSenha
              inputName="confirmacao-senha"
              text={'Confirmação da senha'}
              placeholder={'Mesma que a nova senha acima'}
            />
          </Box>
        </Box>
        <Box display={'flex'} w={'100%'} h={'40%'} alignItems={'center'} paddingLeft={'2.5rem'}>
          <ButtonSubmit onClick={handleSubmit} text={'Recuperar'} color={'#FFF'} background={'primary.300'} />
          <Box display={'flex'} marginTop="1.7rem" justifyContent="space-around" w="140px">
            <Circle w={'1.4rem'} h={'1.4rem'} background="primary.300" />
            <Circle w={'1.4rem'} h={'1.4rem'} background={'primary.300'} />
            <Circle w={'1.4rem'} h={'1.4rem'} background={'primary.300'} />
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}

export default EsqueceuSenha;
