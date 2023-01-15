import { Center, Image } from '@chakra-ui/react';
import React from 'react';

function UserBanner() {
  return (
    <Center w="full" h="180px" bgColor="black">
      <Image src="https://bit.ly/dan-abramov" maxH="full" />
    </Center>
  );
}

export default UserBanner;
