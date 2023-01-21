import React from "react";
import { Box, Flex, Link } from "@chakra-ui/react";
import Custominput from "/src/components/Custominput";
import InputEsquecSenha from "../../components/InputEsquecSenha";
import ButtonSubmit from "../../components/ButtonSubmit";

function TelaLogin(props) {
    return (
        <Box>
            <Box backgroundColor="#FC5185" height="140px" p={4} />
            <Flex flexDirection={"column"} alignItems="center" width={"100%"} height={"100%"} marginTop={"7%"} >
                <Box><img src="/src/assets/logotipo.png" /></Box>
                <Box width={"50%"} display={'flex'} justifyContent={'center'} marginTop={"2%"}>
                    <Custominput typeInput="text" placeholder="Usuário" mr={10} />
                    <Box w='100px' /> {/*A unica forma que eu encontrei para separar as duas Box é adicionando essa no meio*/}
                    <Custominput typeInput="password" placeholder="Senha" ml={10} />
                </Box>
                <Box width={"20%"} marginTop={"5%"}>
                    <ButtonSubmit text={'ENTRAR'} color={'#FFF'} background={'#FC5185'} />
                </Box>
                <Box marginTop={"3%"}>
                    <InputEsquecSenha width={"50%"} justifyContent={"center"} />
                </Box>
                <Box display={"flex"} fontSize={"90%"} marginTop={"4px"}>
                    <Box marginRight="10px" color="#364F6B" fontWeight='500'>
                        AINDA NÃO TEM CONTA?
                    </Box>
                    <Link fontWeight='500' color='#FC5185'>CADASTRA-SE</Link>

                </Box>
            </Flex>

        </Box>
    );
}
export default TelaLogin;