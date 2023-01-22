import React from 'react';
import { Button, Box } from '@chakra-ui/react';

function ButtonEditPerfil({ text, icon, isActive, onClick }) {
  return (
    <Box>
      <Button
        rounded="4px"
        p={4}
        bgColor={isActive ? 'secondary.600' : 'cinza.50'}
        color={isActive ? '#FFF' : '#000'}
        onClick={onClick}
        leftIcon={icon}
        fontWeight={400}
        _hover={{ opacity: 0.7 }}
      >
        {text}
      </Button>
    </Box>
  );
}

export default ButtonEditPerfil;
