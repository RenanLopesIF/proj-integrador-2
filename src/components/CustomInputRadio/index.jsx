import { Box, Input, Button, InputGroup, InputRightElement, useTheme, RadioGroup, HStack, Radio } from '@chakra-ui/react';
import { useState } from 'react';
import { AiOutlineUser, AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

function CustomInput({ typeInput, placeholder, hasIcon }) {
  const [value, setValue] = useState('1')
  const { colors } = useTheme();

  return (
    <Box size="md" w="100%"  >
      <RadioGroup onChange={setValue} >

        <HStack
          width={'100%'}
          color={'#364F6B'}
          spacing={'7%'}
          marginRight={'20px'}
          justifyContent="left"
          padding={'0 0 0 10px'}
          type={'radio'}
          borderRadius={'none'}
          borderBottom={`2px solid ${colors.primary[300]}`}
          boxShadow={`1px 2px 4px 0px rgba(252,81,133,0.38)`}
          h={'52px'}
        >
          <Box  fontSize='16px'  color={'#364F6B'} mr={'12%'}>Sexo:</Box>
          <Radio value='1'>MASCULINO</Radio>
          <Radio value='2'>FEMININO</Radio>
        </HStack>
      </RadioGroup>
    </Box>
  );
}

export default CustomInput;

/* <Input
  padding={'0 0 0 10px'}
  type={'radio'}
  placeholder={placeholder}
  variant="disabled"
  borderRadius={'none'}
  borderBottom={`2px solid ${colors.primary[300]}`}
  boxShadow={`1px 2px 4px 0px rgba(252,81,133,0.38)`}
  h={'52px'}
  textOverflow={'ellipsis'}
  value="um"
/> */