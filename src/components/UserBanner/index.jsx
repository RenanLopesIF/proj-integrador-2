import { Center, Circle, Image } from '@chakra-ui/react';
import React from 'react';
import { HiCamera } from 'react-icons/hi';

function UserBanner() {
  return (
    <Center w="full" h="250px" bgColor="black">
      <Image src="https://bit.ly/dan-abramov" maxH="full" />
      <Circle bgColor="#FFF" p={1} position="absolute" right={0} bottom={0}>
        <HiCamera color="#000" width="full" size={28} />
      </Circle>
    </Center>
  );
}

export default UserBanner;
