import React from 'react';
import { Box, Image, Link } from '@chakra-ui/react';

function AddImgEvent(props) {
  const { imageUrl, text, backgroundColor, color } = props;
  const property = {
    backgroundColor,
    color,
  };

  return (
    <Box
      maxW="sm"
      w="100%"
      h="100%"
      borderWidth="1px"
      borderRadius="lg"
      gap="0.9rem"
      bgColor="#D9D9D9"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      display="flex"
      overflow="hidden"
    >
      <Image src={imageUrl} border="1px" boxSize="120" borderRadius="0.9rem" />
      <Link
        href="#"
        _hover={{ textDecoration: 'none' }}
        w="14rem"
        h="2rem"
        display="flex"
        justifyContent={'center'}
        alignItems={'center'}
        borderRadius={'5px'}
        fontSize={'12px'}
        gap={'10px'}
        style={property}
      >
        {text}
      </Link>
    </Box>
  );
}

export default AddImgEvent;
