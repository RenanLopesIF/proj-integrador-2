import { Center, Spinner, Text } from '@chakra-ui/react';
import React from 'react';

function LoadingSpinner({ text }) {
  return (
    <Center w="full" h="full" display="flex" flexDir="column">
      <Spinner thickness="4px" speed="0.9s" emptyColor="gray.200" color="primary.300" w={32} h={32} />
      {text && (
        <Text color="secondary.600" fontWeight={600} fontSize={44}>
          {text}
        </Text>
      )}
    </Center>
  );
}

export default LoadingSpinner;
