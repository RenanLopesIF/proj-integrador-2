import React from 'react';
import { Link,Box } from '@chakra-ui/react';
const InputEsquecSenha = () => {
    const [hover, setHover] = React.useState(false);

    return (
        <Box>
            <Link
                _hover={{ borderBottom: "3px solid #FC5185" }}
                style={{
                    color: "#364F6B", fontWeight: '700'
                }}
            >
                ESQUECEU A SENHA?
            </Link>
        </Box>

    );
};

export default InputEsquecSenha;