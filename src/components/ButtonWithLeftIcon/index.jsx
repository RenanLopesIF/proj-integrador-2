import { Button } from '@chakra-ui/react';
import React from 'react';

function ButtonWithLeftIcon({ icon, text, onClick }) {
  return (
    <Button
      onClick={onClick}
      _hover={{ backgroundColor: 'primary.50', color: 'primary.400' }}
      leftIcon={icon}
      display="flex"
      color="primary.300"
      variant="unstyled"
      w="full"
      h="10"
      borderRadius={0}
    >
      {String(text).toUpperCase()}
    </Button>
  );
}

export default ButtonWithLeftIcon;
