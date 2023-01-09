import { Center, Image } from '@chakra-ui/react';
import React from 'react';

function PostImage({ src }) {
  return (
    <Center mt={4}>
      <Image maxH="360px" src={src} />
    </Center>
  );
}

export default PostImage;
