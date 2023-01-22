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
import React, { useRef } from 'react';
import DropzoneEventImage from '../DropzoneEventImage';
import MapChooseAddress from '../MapChooseAddress';
import InputCreateEvent from '../InputCreateEvent';
import InputDataHora from '../InputDataHora';
import { useGeolocation } from '../../hooks/geolocation';
import ButtonSubmit from '../ButtonSubmit';

function ModalCreateEvent({ isOpen, onClose }) {
  const borderRadio = '20px';
  const imgFileRef = useRef();
  const { currentGeolocation } = useGeolocation();

  function handleCreateEvent(ev) {
    console.log(ev);
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
          <Box
            as="form"
            onSubmit={(e) => {
              console.log(e);
            }}
          >
            <Center>
              <InputCreateEvent placeholder="Digite o nome do evento" w="60%" />
            </Center>
            <SimpleGrid columns="2" spacingX={10} spacingY={7} mt={3}>
              <FormControl isRequired w="full">
                <Center>
                  <FormLabel>Data de início</FormLabel>
                </Center>
                <InputDataHora />
                <FormErrorMessage>Defina a data de início.</FormErrorMessage>
              </FormControl>

              <FormControl isRequired w="full">
                <Center>
                  <FormLabel>Data de término</FormLabel>
                </Center>
                <InputDataHora />
                <FormErrorMessage>Defina a data de término.</FormErrorMessage>
              </FormControl>

              <Textarea
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
                <ButtonSubmit onClick={handleCreateEvent} isSubmitType text="Criar evento" />
              </VStack>
            </SimpleGrid>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default ModalCreateEvent;
