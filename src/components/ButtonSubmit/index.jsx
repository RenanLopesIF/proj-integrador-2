import React from 'react';
import { Link, Box } from '@chakra-ui/react';
// import { MdSettings } from 'react-icons/md'

function ButtonSubmit(props) {
  const { text, background, color } = props;
  const colors = {
    background,
    color,
  };

  return (
    <Box width={'100%'} height={'100%'}>
      <Link
        
        display={'flex'}
        _hover={{ textDecoration: 'none' }}
        textDecoration={'none'}
        justifyContent={'center'}
        alignItems={'center'}
        borderRadius={'0.2rem'}
        fontSize={'18px'}
        w="100%"
        h="100%"
        padding="10px 50px 10px 50px"
        gap={'4px'}
        style={colors}
      >
        {text}
      </Link>
    </Box>
  );
}

export default ButtonSubmit;
