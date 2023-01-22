import React from 'react';
import { Box, Center, Flex, Link, Radio } from "@chakra-ui/react";
import ButtonSubmit from "../../components/ButtonSubmit";
import CustomInput from "../../components/CustomInput";
import CustomInputRadio from "../../components/CustomInputRadio";
function TelaDeCadastro() {
    return (
        <Box>
            <Box backgroundColor="#FC5185" height="140px" p={4} />
            <Center >

                <Flex gap={'20px'} flexDirection={"column"} alignItems="center" width={"40%"} height={"100%"} marginTop={"5%"} >
                    <Box boxSize={'50%'}><img src="/src/assets/logotipo.png" /></Box>

                    <Box width={"100%"} gap='40px' display={'flex'} justifyContent={'space-between'} marginTop={"1%"}>
                        <CustomInput typeInput="text-disabled" placeholder="Nome" mr={10} />
                        <CustomInput typeInput="text-disabled" placeholder="Sobrenome" />
                    </Box>

                    <CustomInput typeInput="text-disabled" placeholder='Email' ></CustomInput>

                    <Box width={"100%"} gap='40px' display={'flex'} justifyContent={'space-between'} marginTop={"1%"}>
                        <CustomInput typeInput="password" placeholder="Senha" hasIcon mr={10} />

                        <CustomInput typeInput="password" placeholder="Confirmar senha" hasIcon={true} />
                    </Box>

                    <Box width={"100%"} gap='40px' display={'flex'} justifyContent={'space-between'} marginTop={"1%"}>
                        <CustomInput typeInput="text-disabled" placeholder="Login" mr={10} />
                        <CustomInput typeInput="date" placeholder="Nascimento" />
                    </Box>
                    <Box width={'100%'}>
                            <CustomInputRadio />
                    </Box>
                    
                    
                    <Flex justifyContent={'right'} width={"100%"} marginTop={"5%"}>
                        <Center gap={'2'} flexDirection={'column'} width={'48%'} height='100px'>
                            <ButtonSubmit text={'CADASTRAR'} color={'#FFF'} background={'#FC5185'} />
                            <Link fontWeight='500' color='#FC5185'>JÁ TENHO UMA CONTA</Link>
                        </Center>
                    </Flex>
                </Flex>
            </Center>
        </Box>

    );
}
export default TelaDeCadastro;