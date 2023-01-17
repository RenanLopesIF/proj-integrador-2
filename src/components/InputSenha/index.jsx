import { Box, Input } from '@chakra-ui/react';
import React from 'react';

function InputSenha({ text, placeholder }) {
  return (
    <Box marginLeft="2rem">
      <label color="black">
        {text}
        <Input
          display={'flex'}
          placeholder={placeholder}
          fontSize={'1.1rem'}
          w="95%"
          h="45px"
          backgroundColor="#F5F5F5"
          focusBorderColor="gray.200"
          _placeholder={{ opacity: 1, color: 'black' }}
        />
      </label>
    </Box>
  );
}
export default InputSenha;
