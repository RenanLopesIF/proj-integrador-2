import React from 'react';
import { Input } from '@chakra-ui/react';
function InputDataHora({ ref, ...props }) {
  return (
    <Input
      ref={ref}
      colorScheme="cinza"
      type="datetime-local"
      w="100%"
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
      {...props}
    />
  );
}

export default InputDataHora;
