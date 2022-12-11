import React from 'react';
import {Box,HStack, Avatar, Text, Badge, Flex} from '@chakra-ui/react'
import Faixaetaria from './faixaEtaria';

function CardMain(props){
    const {} = props
    const username = 'Renan Lopes'
    const postTitle = 'Festa das Cores'
    return <Box borderRadius='10px' bgColor='#FFF' width='100%' minH="50px" padding={3}>
        <HStack justifyContent='space-between' w='full'>
            <HStack>
                <Avatar/>
                <Flex flexDir='column' gap={1}>
                    <Text color="black" fontSize={16}>{username}</Text>
                    <Text color="gray.500" fontSize={14}>1 dia atrás</Text>
                </Flex>
            </HStack>
            <Flex alignItems='flex-end' flexDir='column' gap={1}>
                <Badge padding={1} colorScheme='yellow'>Acontecendo agora</Badge>
                <Text fontSize={14}>10/12/2022 às 20:30 até 11/12/2022 às 3:00</Text>
            </Flex>
        </HStack>
        <HStack>
            <Text fontWeight={700} color='#364F6B'>{postTitle}</Text>
            <Faixaetaria label="+16" color="red.500"/>
        </HStack>
    </Box>
}

export default CardMain