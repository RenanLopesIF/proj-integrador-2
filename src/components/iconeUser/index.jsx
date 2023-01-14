import React, { useState } from "react";
import { BiUserCircle } from "react-icons/bi";
import { Box, Flex } from '@chakra-ui/react';

function IconeUsuario(props) { // não coloquei a função recebendo o nome, para depois colocar quando for implementado o banco de dados

  const [nome, setNome] = useState("Renan Lopes"); 


  return (
    <div>
      <Flex align="center">
        <Box  fontWeight="500" color="#364F6B"ml={2}>{nome}</Box>
        <Box>
          <BiUserCircle color="#364F6B" name="edit" size="30px" />
        </Box>
      </Flex>
    </div>
  );
}
export default IconeUsuario;