import {
  Box,
  Center,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Select,
  SimpleGrid,
  Text,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import React, { useRef, useState } from 'react';
import { toast } from 'react-toastify';
import DropzoneEventImage from '../DropzoneEventImage';
import MapChooseAddress from '../MapChooseAddress';
import InputCreateEvent from '../InputCreateEvent';
import InputDataHora from '../InputDataHora';
import { useGeolocation } from '../../hooks/geolocation';
import ButtonSubmit from '../ButtonSubmit';
import axios from 'axios';

function ModalCreateEvent({ isOpen, onClose }) {
  const borderRadio = '20px';
  const imgFileRef = useRef();
  const formRef = useRef();
  const [submiting, setSubmiting] = useState(false);

  const { currentGeolocation } = useGeolocation();
  const userId = 3;

  async function handleCreateEvent() {
    setSubmiting(true);
    const ev = formRef.current;
    // eslint-disable-next-line no-undef
    const form = new FormData(ev);

    form.append('event-image', imgFileRef.current);
    form.append('latitude', currentGeolocation.lat);
    form.append('longitude', currentGeolocation.lng);
    form.append('id_usuario', userId);
    const formData = Object.fromEntries(form);
    console.log(formData);

    const URL = 'http://localhost:3004/evento/novo';
    try {
      await axios.post(URL, form);
      toast.success('Evento publicado com sucesso');
      onClose();
    } catch (err) {
      toast.error('Ocorreu um erro ao publicar o evento');
    } finally {
      setSubmiting(false);
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="3xl">
      <ModalOverlay />
      <ModalContent borderRadius={borderRadio} h="85%">
        <ModalHeader
          shadow="lg"
          position="relative"
          bottom="28px"
          left="14px"
          w="fit-content"
          display="flex"
          justifyContent="center"
          alignItems="center"
          borderRadius="12px"
          bgColor="primary.300"
          py={0}
          m="0"
        >
          <Text textShadow="#000 2px 2px 8px" color="#FFF" fontSize={30}>
            CRIE SEU EVENTO!
          </Text>
        </ModalHeader>

        <ModalBody h="full" pt={0} mt={0}>
          <ModalCloseButton
            color="primary.300"
            w="8"
            h="8"
            borderColor="primary.300"
            p={1}
            borderWidth={1}
            size={'lg'}
          />
          <Box as="form" ref={formRef}>
            <Center>
              <InputCreateEvent name="titulo" placeholder="Digite o nome do evento" w="60%" />
            </Center>
            <SimpleGrid columns="2" spacingX={10} spacingY={7} mt={3}>
              <FormControl isRequired w="full">
                <Center>
                  <FormLabel>Data de início</FormLabel>
                </Center>
                <InputDataHora name="data_inicio" />
                <FormErrorMessage>Defina a data de início.</FormErrorMessage>
              </FormControl>

              <FormControl isRequired w="full">
                <Center>
                  <FormLabel>Data de término</FormLabel>
                </Center>
                <InputDataHora name="data_fim" />
                <FormErrorMessage>Defina a data de término.</FormErrorMessage>
              </FormControl>

              <Textarea
                name="descricao"
                w="100%"
                h="140px"
                bgColor="cinza.50"
                color="cinza.500"
                focusBorderColor="cinza.100"
                borderColor="cinza.200"
                borderRadius="4px"
                _hover={{
                  borderColor: 'cinza.300',
                }}
                _placeholder={{
                  color: 'cinza.400',
                }}
                placeholder="Descreva sobre o evento"
                size="sm"
                resize="none"
              />
              <Flex w="full">
                <Box p={2} mr={3} bgColor="cinza.50" h="140px" w="200px">
                  <DropzoneEventImage fileRef={imgFileRef} />
                </Box>
                <Box w="50%">
                  <FormControl>
                    <Center>
                      <FormLabel>Faixa etária</FormLabel>
                    </Center>
                    <Select
                      name="faixa_etaria"
                      bgColor="cinza.50"
                      color="cinza.500"
                      focusBorderColor="cinza.100"
                      borderColor="cinza.200"
                      borderRadius="4px"
                      _hover={{
                        borderColor: 'cinza.300',
                      }}
                      _placeholder={{
                        color: 'cinza.400',
                      }}
                      defaultValue="l"
                    >
                      <option value="l">Livre</option>
                      <option value="10">+10</option>
                      <option value="12">+12</option>
                      <option value="14">+14</option>
                      <option value="16">+16</option>
                      <option value="18">+18</option>
                    </Select>
                  </FormControl>
                </Box>
              </Flex>

              <FormControl>
                <FormLabel>
                  <Center>Selecione o local do evento</Center>
                </FormLabel>
                <Input hidden />
                <Center w="full" h="220px" shadow="md">
                  <MapChooseAddress
                    initialLocation={{ lat: currentGeolocation.lat, lng: currentGeolocation.lng }}
                    mapMode="bright-v8"
                  />
                </Center>
                <FormErrorMessage>Defina o local do evento.</FormErrorMessage>
              </FormControl>

              <VStack mt={8} justifyContent="space-between">
                <Textarea
                  name="descricao_endereco"
                  w="100%"
                  h="100px"
                  bgColor="cinza.50"
                  color="cinza.500"
                  focusBorderColor="cinza.100"
                  borderColor="cinza.200"
                  borderRadius="4px"
                  _hover={{
                    borderColor: 'cinza.300',
                  }}
                  _placeholder={{
                    color: 'cinza.400',
                  }}
                  placeholder="Dê detalhes sobre o endereço"
                  size="sm"
                  resize="none"
                />
                <ButtonSubmit onClick={handleCreateEvent} text="Criar evento" isLoading={submiting} />
              </VStack>
            </SimpleGrid>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default ModalCreateEvent;
