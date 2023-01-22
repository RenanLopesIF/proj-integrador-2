import { Box, Divider, Flex } from '@chakra-ui/react';
import React from 'react';
import { IoMdHome } from 'react-icons/io';
import NavigationButtonSide from '../NavigationButtonSide';

function SideBar() {
  const pathname = window.location.pathname;

  const activeRoute = {
    '/': pathname === '/',
    '/perfil': pathname === '/perfil',
    '/configuracoes': pathname === '/configuracoes',
  };

  const items = [
    { text: 'Home', icon: <IoMdHome />, href: '/', isActive: activeRoute['/'] },
    { text: 'Meu perfil', icon: <IoMdHome />, href: 'perfil', isActive: activeRoute['/perfil'] },
    { text: 'Configurações', icon: <IoMdHome />, href: 'configuracoes', isActive: activeRoute['/configuracoes'] },
  ];

  return (
    <Box>
      <Box as="aside" zIndex={2} bgColor="white" shadow="lg" w="18vw" h="100vh" position="fixed" left={0} top={0}>
        <Flex w="full" h="full" flexDir="column" p={4}>
          <Flex h="full" w="full" flexDir="column" gap={2}>
            <Box mb={5}>
              <NavigationButtonSide text="LOGOMARCA" />
            </Box>
            {items.map((item) => (
              <NavigationButtonSide text={item.text} href={item.href} icon={item.icon} isActive={item.isActive} />
            ))}
          </Flex>
          <Divider my={3} borderBottomWidth={1} opacity={1} borderColor="secondary.600" />
          <Flex mb="6">
            <NavigationButtonSide text="Logout" href="#" icon={<IoMdHome />} />
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}

export default SideBar;
