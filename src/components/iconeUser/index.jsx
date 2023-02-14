import React from 'react';
import { Avatar, Box, Flex } from '@chakra-ui/react';
import { useNavigate } from 'react-router';
import { useAuth } from '../../hooks/auth';

function IconeUser() {
  const navigate = useNavigate();
  const { userData, isAuthed } = useAuth();

  return (
    <Box
      cursor={isAuthed ? 'pointer' : 'auto'}
      pl={2}
      onClick={() => {
        if (isAuthed) navigate('/perfil');
      }}
    >
      <Flex align="center">
        <Box fontWeight="400" fontSize="22px" color="#364F6B" mr={2}>
          {userData.nome || 'Anônimo'}
        </Box>
        <Box>
          <Avatar
            bg="secondary.600"
            color="white"
            size="md"
            name={userData.nome}
            src={`http://localhost:3004/${userData.url_imagem_perfil}`}
          />
        </Box>
      </Flex>
    </Box>
  );
}
export default IconeUser;
