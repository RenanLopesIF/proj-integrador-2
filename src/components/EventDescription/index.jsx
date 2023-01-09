import { Text } from '@chakra-ui/react';
import React from 'react';

function EventDescription({ text }) {
  return (
    <Text color="#364F6b" fontSize={14}>
      {text}
    </Text>
  );
}

export default EventDescription;
