import {
    Input,
    Button,
    InputGroup,
    InputRightElement,
    useTheme,
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

    const {
      colors
    } = useTheme();

    const handleTypeInput = () => {
      if(typeInput !== 'password') return 'text'
      else return show ? 'text' : 'password';
    }


    return (
      <InputGroup size='md' w="250px" h={"72px"}>
        <Input
          padding={"0"}
          type={handleTypeInput()}
          placeholder={placeholder}
          variant='disabled'
          borderRadius={"none"}
          borderBottom={`2px solid ${colors.primary[300]}`}
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

