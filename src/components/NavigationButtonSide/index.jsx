import React from 'react';
import { Button, Link } from '@chakra-ui/react';

function NavigationButtonSide({ text, isActive, icon, href }) {
  return (
    <Button
      bgColor={isActive ? 'primary.300 ' : 'white'}
      as={Link}
      leftIcon={icon}
      href={href}
      _hover={{ textDecoration: 'none' }}
      display="flex"
      justifyContent={'flex-start'}
      alignItems={'center'}
      borderRadius={'9px'}
      fontSize={'1.3rem'}
      w="100%"
      h="60px"
      gap={'10px'}
      paddingLeft={'1.5rem'}
      color={isActive ? 'white' : 'secondary.600'}
    >
      {text}
    </Button>
  );
}

export default NavigationButtonSide;
