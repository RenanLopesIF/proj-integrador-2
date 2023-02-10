import React from 'react';
import { Link, Box } from '@chakra-ui/react';
const InputEsquecSenha = () => {
  return (
    <Box>
      <Link
        href="/recuperar-senha"
        _hover={{ borderBottom: '3px solid primary.300' }}
        style={{
          color: '#364F6B',
          fontWeight: '700',
        }}
      >
        ESQUECEU A SENHA?
      </Link>
    </Box>
  );
};

export default InputEsquecSenha;
