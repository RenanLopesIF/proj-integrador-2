import React from 'react';
import { Center, Text } from '@chakra-ui/react';

function Faixaetaria({ label }) {
  const colors = {
    L: 'green.500',
    0: 'green.500',
    10: 'azulClaro.400',
    12: 'yellow.300',
    14: 'orange.300',
    16: 'red.600',
    18: 'black',
  };

  return (
    <Center borderRadius="4px" w="26px" h="22px" bgColor={colors[label]} padding="2px">
      <Text color="#fff" fontSize="12px">
        {label.toUpperCase() === 'L' || label === '0' ? 'L' : '+' + label}
      </Text>
    </Center>
  );
}

export default Faixaetaria;
