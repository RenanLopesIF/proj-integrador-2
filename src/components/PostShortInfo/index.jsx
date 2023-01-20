import { HStack, Text } from '@chakra-ui/react';
import React from 'react';

function PostShortInfo({ icon, text }) {
  return (
    <HStack>
      {icon}
      <Text fontWeight={500} color="cinza.50" fontSize={12}>
        {text}
      </Text>
    </HStack>
  );
}

export default PostShortInfo;
