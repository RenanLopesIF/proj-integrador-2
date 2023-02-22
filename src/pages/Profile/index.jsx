import React, { useCallback, useEffect, useRef, useState } from 'react';
import Layout from '../../components/Layout';
import { Box, Button, Center, Flex, GridItem, HStack, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import UserBanner from '../../components/UserBanner';
import ButtonEditPerfil from '../../components/ButtonEditPerfil';
import { MdModeEditOutline } from 'react-icons/md';
import LoadingSpinner from '../../components/LoadingSpinner';
import Post from '../../components/Post';
import InputWithLabel from '../../components/InputWithLabel';
import api from '../../services/axios';
import { useAuth } from '../../hooks/auth';
import { toast } from 'react-toastify';
import DropzoneUserImage from '../../components/DropzoneUserImage';
import DropzoneUserBgImage from '../../components/DropzoneUserBgImage';

function Profile() {
  const { userData, isAuthed } = useAuth();
  const imgFileRef = useRef();
  const imgBgFileRef = useRef();

  const [currentTab, setCurrentTab] = useState('edit');
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [userCredentials, setUserCredentials] = useState({ login: '', senha: '' });
  const [userInfo, setUserInfo] = useState(userData);
  const [bgImg, setBgImg] = useState(userData.url_imagem_fundo);

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
      userID: userInfo.ID,
      name: formData.name,
      email: formData.email,
      birthdate: formData.birthdate,
      login: formData.login,
      senha: formData.password,
    });
  }

  const getEventsByUser = useCallback(async () => {
    const res = await api.get(`/usuario/eventos/${userInfo.ID}`);
    setEvents(res.data);
    setIsLoading(false);
  }, [userInfo]);

  const getUserCredentials = useCallback(async () => {
    const res = await api.get(`/auth/usuario-credenciais`);
    setUserCredentials(res.data);
  }, [userInfo]);

  const handleUserImage = useCallback(async () => {
    const form = new FormData();
    form.append('background-image', imgBgFileRef.current);

    await api.put(`/usuario/upload/background-image/${userInfo.ID}`, form);
    toast.info('Sua imagem de capa foi alterada');
  }, [bgImg]);

  useEffect(() => {
    if (bgImg && bgImg.includes('blob:http')) {
      handleUserImage();
    }
  }, [bgImg]);

  useEffect(() => {
    if (userData.ID) {
      setUserInfo(userData);
      setBgImg(`http://localhost:3004/${userData.url_imagem_fundo}`);
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
          <UserBanner src={bgImg} />
          <Flex flexDir="row" justifyContent="space-between" px={6} position="relative" bottom="50px">
            <Flex alignItems="flex-end">
              <DropzoneUserImage fileRef={imgFileRef} userImg={`http://localhost:3004/${userInfo.url_imagem_perfil}`} />
              <Text ml={4} color="black" fontSize={22} fontWeight={500}>
                {userInfo.nome}
              </Text>
            </Flex>
            <DropzoneUserBgImage handlePreview={setBgImg} fileRef={imgBgFileRef} />
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
              {events.length > 0 ? (
                events.map((evt) => <Post isDeletable refetch={getEventsByUser} key={evt.ID} event={evt} />)
              ) : (
                <Center w="100%" h="100%">
                  <Text fontWeight="900" fontSize="30px" color="secondary.600">
                    Nenhuma publicação foi encontrada
                  </Text>
                </Center>
              )}
            </VStack>
          )}

          {currentTab === 'edit' && (
            <Box w="full">
              <form onSubmit={handleSubmit}>
                <SimpleGrid columns={2} spacingX={5} spacingY={8}>
                  <GridItem colSpan={2}>
                    <InputWithLabel defaultValue={userInfo.email} name="email" label="Email:" invalidText="preencha" />
                  </GridItem>
                  <GridItem>
                    <InputWithLabel defaultValue={userInfo.nome} name="name" label="Nome:" />
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
                      defaultValue={userInfo.data_nascimento ? userInfo.data_nascimento.split('T')[0] : ''}
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
