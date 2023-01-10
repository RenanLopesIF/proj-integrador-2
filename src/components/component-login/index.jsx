import {
    Flex,
    Input,
    Box,
    Button,
} from '@chakra-ui/react'
import { useState } from 'react';
import {
    AiOutlineUser,
    AiOutlineEye,
    AiOutlineEyeInvisible
} from "react-icons/ai";

function Login(props) {
    const {
        typeInput,
        placeholder
    } = props;
    const [valueTextInput, setValueTextInput] = useState("");

    const [changeTypeInputPassword, setChangeTypeInputPassword] = useState('password');
    const [changeIcon, setChangeIcon] = useState(
        <AiOutlineEye
            color='#FC5185'
            cursor="pointer"
        />
    )
    const [isActiveEyeIcon, setIsActiveEyeIcon] = useState(false);


    // const handleConfigInputIcon = () => {
    //     if(isActiveEyeIcon === false) {
    //         setChangeIcon(
    //             <AiOutlineEyeInvisible color="#FC5185" cursor={"pointer"} />
    //         );
    //         setIsActiveEyeIcon(true);
    //         setChangeTypeInputPassword('text');
    //     } else {
    //         setIsActiveEyeIcon(false);
    //         setChangeIcon(
    //             <AiOutlineEye
    //                 color='#FC5185'
    //                 cursor="pointer"
    //             />
    //         );
    //         setChangeTypeInputPassword('password');
    //     }
    // }

    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)


    return (
        <Box width={"250px"} bg={"#FFFFFF"} >
            <Flex
                alignItems={"center"}
                justifyContent="center"
                padding="0"
                border={"1px solid red"}
                w="300px"
            >
                <Input
                    type={typeInput === 'text' ? typeInput : changeTypeInputPassword}
                    placeholder={placeholder}
                    padding={"0"}
                    borderRadius="none"
                    border="1px solid black"
                    // borderColor={""}
                    focusBorderColor="white"
                    onChange={(event) => setValueTextInput(event.target.value)}
                    // borderBottom={'1px solid red'}
                    size="md"
                    width={"235px"}

                />
                {
                    typeInput === "text"
                        ? <AiOutlineUser color='#FC5185' cursor="pointer" />
                        : <Button h='1.75rem' size='sm' onClick={handleClick}>
                        {show ? 'not show' : 'Show'}
                      </Button>
                }
            </Flex>
        </Box>
    )
}


export default Login;

