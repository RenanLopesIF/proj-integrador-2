import { Text } from '@chakra-ui/react';
import React from 'react';

function EventTitle({ text }) {
  return (
    <Text fontWeight={700} color="#364F6B">
      {text}
    </Text>
  );
}

export default EventTitle;
