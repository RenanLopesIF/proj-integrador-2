import React from "react";
import {Center, Text} from '@chakra-ui/react'

function Faixaetaria(props){
    const {label, color} = props;

    return (
    <Center 
        borderRadius='4px'
        w="26px"
        h="22px"
        bgColor={color || 'green.500'}
        padding="2px">
        <Text color="#fff" fontSize='12px'>{label || 'L'}</Text>
    </Center>)
}

export default Faixaetaria