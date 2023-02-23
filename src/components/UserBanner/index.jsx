import { Center, Image } from '@chakra-ui/react';
import React from 'react';

function UserBanner({ src }) {
  console.log('a', src);
  return (
    <Center w="full" h="180px" bgColor="secondary.800">
      {src && <Image src={src} maxH="full" />}
    </Center>
  );
}

export default UserBanner;
