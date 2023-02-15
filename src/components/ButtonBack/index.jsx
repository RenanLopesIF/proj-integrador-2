import { Flex, Link } from '@chakra-ui/react';
import React from 'react';
import { IoArrowBackSharp } from 'react-icons/io5';

function ButtonBack({ href }) {
  return (
    <Link ml={3} h="full" fontSize={22} href={href} fontWeight="500" color="white">
      <Flex alignItems="center" pl={8}>
        <IoArrowBackSharp size={30} color="#FFF" style={{ marginRight: '12px' }} />
        Voltar
      </Flex>
    </Link>
  );
}

export default ButtonBack;
