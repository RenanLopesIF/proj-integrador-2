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
    <Box>
      <Link
        display={'flex'}
        _hover={{ textDecoration: 'none' }}
        textDecoration={'none'}
        justifyContent={'center'}
        alignItems={'center'}
        borderRadius={'0.3rem'}
        fontSize={'18px'}
        w="100%"
        h="100%"
        padding="20px 50px 20px 50px"
        gap={'4px'}
        // marginLeft="1.4rem"
        style={colors}
      >
        {text}
      </Link>
    </Box>
  );
}

export default ButtonSubmit;
