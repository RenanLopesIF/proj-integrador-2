import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import {
  Box,
  Button,
  Circle,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  GridItem,
  HStack,
  Radio,
  RadioGroup,
  SimpleGrid,
  Stack,
  VStack,
} from '@chakra-ui/react';
import UserBanner from '../../components/UserBanner';
import UserChooseImage from '../../components/UserChooseImage';
import { HiCamera } from 'react-icons/hi';
import ButtonEditPerfil from '../../components/ButtonEditPerfil';
import { MdModeEditOutline } from 'react-icons/md';
import axios from 'axios';
import LoadingSpinner from '../../components/LoadingSpinner';
import Post from '../../components/Post';
import InputWithLabel from '../../components/InputWithLabel';

function Profile() {
  const [currentTab, setCurrentTab] = useState('edit');
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [userGender, setUserGender] = useState('m');

  function handleTabScreen(tab) {
    setCurrentTab(tab);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // eslint-disable-next-line no-undef
    const formData = Object.fromEntries(new FormData(e.target));
    // eslint-disable-next-line no-undef
    console.log(formData);
  }

  useEffect(() => {
    (async () => {
      const url = 'http://localhost:3005/events';
      const { data } = await axios.get(url);
      setEvents(data);
      setIsLoading(false);
    })();
  }, []);

  if (isLoading)
    return (
      <Layout>
        <LoadingSpinner text="Carregando" />
      </Layout>
    );

  return (
    <Layout>
      <Box w="full" h="full" bgColor={currentTab === 'edit' ? '#FFF' : 'cinza.100'}>
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
                <Post event={evt} />
              ))}
            </VStack>
          )}

          {currentTab === 'edit' && (
            <Box w="full">
              <form onSubmit={handleSubmit}>
                <SimpleGrid columns={2} spacingX={5} spacingY={8}>
                  <GridItem colSpan={2}>
                    <InputWithLabel isInvalid name="email" label="Email:" invalidText="preencha" />
                  </GridItem>
                  <GridItem>
                    <InputWithLabel name="name" label="Nome:" />
                  </GridItem>
                  <GridItem>
                    <InputWithLabel name="user" label="Usuário:" />
                  </GridItem>
                  <GridItem>
                    <InputWithLabel name="password" label="Senha:" />
                  </GridItem>
                  <GridItem>
                    <InputWithLabel name="confirmPassword" label="Confirmação de senha:" />
                  </GridItem>
                  <GridItem>
                    <InputWithLabel name="birthdate" label="Data de nascimento:" type="date" />
                  </GridItem>
                  <GridItem>
                    <FormControl bgColor="cinza.100" rounded="4px" h="55px" px={3}>
                      <FormLabel color="#000" fontWeight={500} m={0}>
                        Sexo:
                      </FormLabel>
                      <RadioGroup name="gender" onChange={setUserGender} value={userGender}>
                        <Stack direction="row">
                          <Radio colorScheme="secondary" value="m">
                            Masculino
                          </Radio>
                          <Radio colorScheme="secondary" value="f">
                            Feminino
                          </Radio>
                        </Stack>
                      </RadioGroup>
                      <FormErrorMessage>Preencha este campo</FormErrorMessage>
                    </FormControl>
                  </GridItem>
                  <GridItem></GridItem>
                  <GridItem justifyContent="flex-end" display="flex">
                    <Button
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
