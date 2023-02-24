import React from 'react';
import { Box, Center, Flex, Image, Link, Text } from '@chakra-ui/react';
import ButtonSubmit from '../../components/ButtonSubmit';
import CustomInput from '../../components/CustomInput';
import api from '../../services/axios';
import { toast } from 'react-toastify';
import ButtonBack from '../../components/ButtonBack';
import { useNavigate } from 'react-router-dom';

function TelaDeCadastro() {
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const form = Object.fromEntries(new FormData(e.nativeEvent.target));

    if (form.senha != form.confirmaSenha) {
      toast.error('Confirmação de senha não coincide');
      return;
    }
    try {
      await api.post('/auth/novo', {
        nome: form.name + ' ' + form.sobrenome,
        email: form.email,
        data_nascimento: form.nascimento,
        login: form.login,
        senha: form.senha,
      });

      toast.success('Conta criada com sucesso');
      navigate('/login');
    } catch (error) {
      toast.error('Houve um erro ao tentar criar conta. Tente novamente mais tarde');
    }
  }

  return (
    <Box>
      <Box backgroundColor="primary.300" height="140px" p={4}>
        <ButtonBack href="/login" />
      </Box>
      <Center>
        <Flex
          onSubmit={handleSubmit}
          as="form"
          gap={'20px'}
          flexDirection={'column'}
          alignItems="center"
          width={'40%'}
          height={'100%'}
          marginTop={'5%'}
        >
          <Box boxSize={'50%'}>
            <Flex alignItems="center">
              <Image w="60px" h="72px" src="FestFinder.png" />
              <Text ml={6} color="primary.300" fontWeight={500} fontSize={32}>
                FestFinder
              </Text>
            </Flex>
          </Box>

          <CustomInput inputName="email" typeInput="text-disabled" placeholder="Email" />

          <Box width={'100%'} gap="40px" display={'flex'} justifyContent={'space-between'} marginTop={'1%'}>
            <CustomInput inputName="name" typeInput="text-disabled" placeholder="Nome" mr={10} />
            <CustomInput inputName="sobrenome" typeInput="text-disabled" placeholder="Sobrenome" />
          </Box>

          <Box width={'100%'} gap="40px" display={'flex'} justifyContent={'space-between'} marginTop={'1%'}>
            <CustomInput inputName="senha" typeInput="password" placeholder="Senha" hasIcon mr={10} />

            <CustomInput inputName="confirmaSenha" typeInput="password" placeholder="Confirmar senha" hasIcon={true} />
          </Box>

          <Box width={'100%'} gap="40px" display={'flex'} justifyContent={'space-between'} marginTop={'1%'}>
            <CustomInput inputName="login" typeInput="text-disabled" placeholder="Login" mr={10} />
            <CustomInput inputName="nascimento" typeInput="date" placeholder="Nascimento" />
          </Box>

          <Flex justifyContent={'right'} width={'100%'}>
            <Center gap={'2'} flexDirection={'column'} width={'48%'} height="100px">
              <ButtonSubmit text={'CADASTRAR'} isSubmitType />
              <Link href="/login" fontWeight="500" color="primary.300">
                JÁ TENHO UMA CONTA
              </Link>
            </Center>
          </Flex>
        </Flex>
      </Center>
    </Box>
  );
}
export default TelaDeCadastro;
