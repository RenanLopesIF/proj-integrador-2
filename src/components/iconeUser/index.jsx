import React from 'react';
import { Avatar, Box, Flex } from '@chakra-ui/react';
import { useNavigate } from 'react-router';

function IconeUser() {
  const nome = 'Renan Lopes';
  const userImage = '';
  const navigate = useNavigate();

  return (
    <Box
      cursor="pointer"
      pl={2}
      onClick={() => {
        navigate('/perfil');
      }}
    >
      <Flex align="center">
        <Box fontWeight="400" fontSize="22px" color="#364F6B" mr={2}>
          {nome}
        </Box>
        <Box>
          <Avatar bg="secondary.600" size="md" src={userImage} name={nome} />
        </Box>
      </Flex>
    </Box>
  );
}
export default IconeUser;
