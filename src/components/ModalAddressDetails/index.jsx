import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalBody,
  ModalContent,
  Button,
  Text,
  VStack,
  Center,
} from '@chakra-ui/react';
import { FaRegWindowClose } from 'react-icons/fa';
import MapInstance from '../MapAddressInfoInstance';

function ModalAddressDetails({ isOpen, onClose, LatLng, address, autoAddress }) {
  const borderRadio = '20px';
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="2xl">
      <ModalOverlay />
      <ModalContent borderRadius={borderRadio} h="85%">
        <ModalHeader
          color="white"
          display="flex"
          justifyContent="center"
          alignItems="center"
          borderTopRadius={borderRadio}
          bgColor="primary.300"
          py={2}
        >
          DETALHES DO ENDEREÇO
          <Button
            onClick={onClose}
            p={0}
            m={0}
            _hover={{ bgColor: 'primary.300' }}
            _active={{ bgColor: 'primary.300' }}
            bgColor="primary.300"
            position="absolute"
            right={2}
          >
            <FaRegWindowClose size={24} />
          </Button>
        </ModalHeader>

        <ModalBody h="full">
          <VStack w="full" h="full" pb={3}>
            <Text mb={1} fontSize={15} fontWeight={700}>
              {address}
            </Text>
            <Text color="#A4A4A4" fontSize={11}>{`DETALHES GERADOS AUTOMATICAMENTE: ${autoAddress}`}</Text>
            <Center w="full" h="100%">
              <MapInstance lat={LatLng.lat} lng={LatLng.lng} mapMode="bright-v8" />
            </Center>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default ModalAddressDetails;
