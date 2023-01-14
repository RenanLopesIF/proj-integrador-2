import React, { useState } from 'react';
import { FormControl, FormLabel, Input, Icon } from '@chakra-ui/react';
import { RiCalendarLine } from 'react-icons/ri';
//AVISO: Tive dificuldade de alterar o icone da data e o placeholder, porém o jeito que eu fiz deve ser suficiente.
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
