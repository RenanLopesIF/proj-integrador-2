import React from 'react';
import { Button } from '@chakra-ui/react';

function ButtonSubmit({ text, onClick, isSubmitType }) {
  return (
    <Button
      type={isSubmitType ? 'submit' : 'button'}
      onClick={onClick}
      w="full"
      bgColor="primary.300"
      color="#FFF"
      rounded="4px"
      _hover={{ bgColor: 'primary.200' }}
    >
      {text.toUpperCase()}
    </Button>
  );
}

export default ButtonSubmit;
