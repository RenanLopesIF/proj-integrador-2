import React from 'react';
import { Avatar, Box, Flex } from '@chakra-ui/react';
import { useNavigate } from 'react-router';
import { useAuth } from '../../hooks/auth';

function IconeUser() {
  const userImage = '';
  const navigate = useNavigate();
  const { userData } = useAuth();

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
          {userData.nome || 'Anônimo'}
        </Box>
        <Box>
          <Avatar
            bg="secondary.600"
            size="md"
            name={userImage}
            src={`http://localhost:3004/${userData.url_imagem_perfil}`}
          />
        </Box>
      </Flex>
    </Box>
  );
}
export default IconeUser;
