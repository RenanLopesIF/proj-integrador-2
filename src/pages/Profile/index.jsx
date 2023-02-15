import React, { useCallback, useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import { Box, Button, Circle, Flex, GridItem, HStack, SimpleGrid, VStack } from '@chakra-ui/react';
import UserBanner from '../../components/UserBanner';
import UserChooseImage from '../../components/UserChooseImage';
import { HiCamera } from 'react-icons/hi';
import ButtonEditPerfil from '../../components/ButtonEditPerfil';
import { MdModeEditOutline } from 'react-icons/md';
import LoadingSpinner from '../../components/LoadingSpinner';
import Post from '../../components/Post';
import InputWithLabel from '../../components/InputWithLabel';
import api from '../../services/axios';
import { useAuth } from '../../hooks/auth';
import { toast } from 'react-toastify';

function Profile() {
  const [currentTab, setCurrentTab] = useState('edit');
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { userData, isAuthed } = useAuth();
  const [userCredentials, setUserCredentials] = useState({ login: '', senha: '' });

  function handleTabScreen(tab) {
    setCurrentTab(tab);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    // eslint-disable-next-line no-undef
    const formData = Object.fromEntries(new FormData(e.target));
    // eslint-disable-next-line no-undef
    if (formData.password != formData.confirmPassword) {
      toast.error('Confirmação de senha não coincide!');
      return;
    }
    await api.put('/usuario/atualizar/dados', {
      userID: userData.ID,
      name: formData.name,
      email: formData.email,
      birthdate: formData.birthdate,
      login: formData.login,
      senha: formData.password,
    });
  }

  const getEventsByUser = useCallback(async () => {
    const res = await api.get(`/usuario/eventos/${userData.ID}`);
    setEvents(res.data);
    setIsLoading(false);
  }, [userData]);

  const getUserCredentials = useCallback(async () => {
    const res = await api.get(`/auth/usuario-credenciais`);
    setUserCredentials(res.data);
  }, [userData]);

  useEffect(() => {
    if (userData.ID) {
      getEventsByUser();
      getUserCredentials();
    }
  }, [userData]);

  useEffect(() => {
    if (!isLoading && !isAuthed) window.location = '/';
  }, [isAuthed, isLoading]);

  if (isLoading)
    return (
      <Layout>
        <LoadingSpinner text="Carregando" />
      </Layout>
    );

  return (
    <Layout>
      <Box w="full" h="full" bgColor={currentTab === 'edit' ? '#FFF' : 'cinza.50'}>
        <Box w="full" bgColor="#FFF">
          <UserBanner />
          <Flex flexDir="row" justifyContent="space-between" px={6} position="relative" bottom="50px">
            <UserChooseImage />
            <Circle zIndex={100} bgColor="#FFF" p={1} w="32px" h="32px">
              <HiCamera color="#000" width="full" size={28} />
            </Circle>
          </Flex>
        </Box>

        <HStack alignItems="flex-start" px={6} bgColor="#FFF" pb={4}>
          <ButtonEditPerfil
            text="Editar perfil"
            icon={<MdModeEditOutline name="edit" size="20px" />}
            isActive={currentTab === 'edit'}
            onClick={() => {
              handleTabScreen('edit');
            }}
          />
          <ButtonEditPerfil
            text="Minhas publicações"
            isActive={currentTab === 'publications'}
            onClick={() => {
              handleTabScreen('publications');
            }}
          />
        </HStack>

        <Box px="20%" mt={8} py={10}>
          {currentTab === 'publications' && (
            <VStack gap={6}>
              {events.map((evt) => (
                <Post refetch={getEventsByUser} key={evt.ID} event={evt} />
              ))}
            </VStack>
          )}

          {currentTab === 'edit' && (
            <Box w="full">
              <form onSubmit={handleSubmit}>
                <SimpleGrid columns={2} spacingX={5} spacingY={8}>
                  <GridItem colSpan={2}>
                    <InputWithLabel defaultValue={userData.email} name="email" label="Email:" invalidText="preencha" />
                  </GridItem>
                  <GridItem>
                    <InputWithLabel defaultValue={userData.nome} name="name" label="Nome:" />
                  </GridItem>
                  <GridItem>
                    <InputWithLabel defaultValue={userCredentials.login} name="login" label="Usuário:" />
                  </GridItem>
                  <GridItem>
                    <InputWithLabel
                      defaultValue={userCredentials.senha}
                      type="password"
                      name="password"
                      label="Senha:"
                    />
                  </GridItem>
                  <GridItem>
                    <InputWithLabel
                      defaultValue={userCredentials.senha}
                      type="password"
                      name="confirmPassword"
                      label="Confirmação de senha:"
                    />
                  </GridItem>
                  <GridItem>
                    <InputWithLabel
                      defaultValue={userData.data_nascimento ? userData.data_nascimento.split('T')[0] : ''}
                      name="birthdate"
                      label="Data de nascimento:"
                      type="date"
                    />
                  </GridItem>

                  <GridItem justifyContent="flex-end" display="flex">
                    <Button
                      h="full"
                      w="full"
                      type="submit"
                      bgColor="primary.300"
                      color="#FFF"
                      _hover={{ bgColor: 'primary.200' }}
                      textTransform="uppercase"
                    >
                      Salvar
                    </Button>
                  </GridItem>
                </SimpleGrid>
              </form>
            </Box>
          )}
        </Box>
      </Box>
    </Layout>
  );
}

export default Profile;
