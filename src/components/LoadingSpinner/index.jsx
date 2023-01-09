import { Spinner } from '@chakra-ui/react';
import React from 'react';

function LoadingSpinner() {
  return <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="primary.300" size="xl" />;
}

export default LoadingSpinner;
