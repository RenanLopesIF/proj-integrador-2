import React from 'react';
import { Box, Input } from '@chakra-ui/react';

function InputSenha({ text, placeholder, inputName }) {
  return (
    <Box>
      <label color="black">
        {text}
        <Input
          name={inputName}
          display={'flex'}
          placeholder={placeholder}
          fontSize={'1.1rem'}
          w="95%"
          h="50px"
          backgroundColor="#F5F5F5"
          focusBorderColor="gray.200"
          _placeholder={{ opacity: 1, color: 'black' }}
        />
      </label>
    </Box>
  );
}
export default InputSenha;
