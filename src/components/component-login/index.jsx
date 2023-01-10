import {
    Input,
    Button,
    InputGroup,
    InputRightElement,
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

    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);


    return (
      <InputGroup size='md' w="250px" h={"72px"}>
        <Input
          pr='4.5rem'
          type={typeInput !== 'password' ? 'text' : show ? 'text' : 'password'}
          placeholder={placeholder}
          variant='flushed'
          borderColor="primary.300"
          focusBorderColor="primary.300"
          _focus={{
            borderColor: "primary.300"
          }}
        />
        <InputRightElement width='4.5rem'>
          {
            typeInput === 'text' ?
              <AiOutlineUser color='#FC5185' /> :
              <Button
              h='1.75rem'
              size='sm'
              onClick={handleClick}
              bg="none"
              _hover={{
                bg: "none"
              }}
              _active={{
                bg: "none"
              }}
              >
              {show ? <AiOutlineEyeInvisible
              color='#FC5185'
              cursor={"pointer"}
              /> : <AiOutlineEye color='#FC5185' cursor={"pointer"}/>}
            </Button>
          }
        </InputRightElement>
      </InputGroup>
    )
}


export default Login;

