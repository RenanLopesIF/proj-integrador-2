import React from 'react';
import {Box,HStack, Avatar, Text, Badge, Flex, VStack, Image, Center} from '@chakra-ui/react'
import {MdAlarmOff, MdAlarmOn} from 'react-icons/md'
import {BiMap} from 'react-icons/bi'
import Faixaetaria from './faixaEtaria';

function CardMain(props){
    const {} = props
    const username = 'Renan Lopes'
    const postTitle = 'Festa das Cores'
    const postDescription = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, at? Voluptatum cum quod eius magnam asperiores consequatur, consequuntur, tempora provident rerum quis perferendis! Nihil enim reprehenderit impedit aut corporis? Culpa."
    const postImageUrlx = 'https://valenews.com.br/wp-content/uploads/2021/10/FestivaldasCoresNovaGokula27102021FernandoNoronha.jpg'
    const postImageUrl = 'https://pbs.twimg.com/media/ETCnTxDX0AIsIXG?format=jpg&name=900x900'
    const contentPadding = 3;
    return <Box borderRadius='10px' bgColor='#FFF' width='100%' minH="50px">
        <HStack alignItems='flex-start' justifyContent='space-between' w='full' padding={contentPadding}>
            <HStack>
                <Avatar/>
                <Flex flexDir='column' gap={1}>
                    <Text color="black" fontSize={16}>{username}</Text>
                    <Text color="gray.500" fontSize={14}>1 dia atrás</Text>
                </Flex>
            </HStack>
            <Flex alignItems='flex-end' flexDir='column' gap={1}>
                <Badge padding={1} colorScheme='yellow'>Acontecendo agora</Badge>
            </Flex>
        </HStack>
        <VStack 
            alignItems='flex-start'
            px={contentPadding * 2}
            py={contentPadding}
            backgroundColor="#364f6b"
            width="100%"
            gap={2}
            >
            <HStack gap={6}>
                <HStack>
                    <MdAlarmOn color="#F5F5F5"/>
                    <Text fontWeight={500} color="#F5F5F5" fontSize={12}>10/12/2022 - 20:30</Text>
                </HStack>
                <HStack>
                    <MdAlarmOff color="#F5F5F5"/>
                    <Text fontWeight={500} color="#F5F5F5" fontSize={12}>11/12/2022 - 3:00</Text>
                </HStack>
            </HStack>
            <HStack>
                <BiMap color="#F5F5F5"/>
                <Text fontWeight={500} color="#F5F5F5" fontSize={12}>EM ARAÇUAÍ, À 27KM</Text>
            </HStack>
        </VStack>
        <Box padding={contentPadding}>
            <HStack mt={2}>
                <Text fontWeight={700} color='#364F6B'>{postTitle}</Text>
                <Faixaetaria label="+16" color="red.500"/>
            </HStack>
            <Box>
                <Text color="#364F6b" fontSize={14}>{postDescription}</Text>
                <Center mt={4}>
                <Image maxH='400px' src={postImageUrl}/>
                </Center>
            </Box>
        </Box>
    </Box>
}

export default CardMain