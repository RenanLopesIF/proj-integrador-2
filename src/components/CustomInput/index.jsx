import { Input, Button, InputGroup, InputRightElement, useTheme } from '@chakra-ui/react';
import { useState } from 'react';
import { AiOutlineUser, AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

function CustomInputBase({ typeInput, placeholder, hasIcon, inputName }) {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const { colors } = useTheme();

  const handleTypeInput = () => {
    if (typeInput !== 'password') return typeInput;
    else return show ? 'text' : 'password';
  };

  return (
    <InputGroup size="md" w="100%">
      <Input
        name={inputName}
        color={'#364F6B'}
        padding={'0 0 0 10px'}
        type={handleTypeInput()}
        placeholder={placeholder}
        variant="disabled"
        borderRadius={'none'}
        borderBottom={`2px solid ${colors.primary[300]}`}
        boxShadow={`1px 2px 4px 0px rgba(252,81,133,0.38)`}
        h={'52px'}
        textOverflow={'ellipsis'}
      />
      {hasIcon === true && (
        <InputRightElement width="4.5rem" h={'100%'}>
          {typeInput === 'text-disabled' ? null : typeInput === 'text' ? (
            <AiOutlineUser color={colors.primary[300]} size={'26px'} />
          ) : (
            <Button
              h="1.75rem"
              size="sm"
              onClick={handleClick}
              bg="none"
              _hover={{
                bg: 'none',
              }}
              _active={{
                bg: 'none',
              }}
            >
              {show ? (
                <AiOutlineEyeInvisible color={colors.primary[300]} cursor={'pointer'} size={'26px'} />
              ) : (
                <AiOutlineEye color={colors.primary[300]} cursor={'pointer'} size={'26px'} />
              )}
            </Button>
          )}
        </InputRightElement>
      )}
    </InputGroup>
  );
}

export default CustomInputBase;
