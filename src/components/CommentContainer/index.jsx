import { Box } from '@chakra-ui/react';
import React from 'react';

function CommentsContainer({ children }) {
  return (
    <Box w="full" minH="10px" rounded="md" bgColor="cinza.50" p={4}>
      {children}
    </Box>
  );
}

export default CommentsContainer;
