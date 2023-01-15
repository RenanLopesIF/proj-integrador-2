import { FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react';
import React from 'react';

function InputWithLabel({ label, isInvalid, invalidText, ref, ...props }) {
  return (
    <FormControl isInvalid={isInvalid} bgColor="cinza.100" rounded="4px" h="55px" px={3} ref={ref}>
      <FormLabel color="#000" fontWeight={500} m={0}>
        {label}
      </FormLabel>
      <Input variant="unstyled" {...props} />
      <FormErrorMessage>{invalidText}</FormErrorMessage>
    </FormControl>
  );
}

export default InputWithLabel;
