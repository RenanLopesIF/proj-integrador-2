import React from 'react';
import { Link } from '@chakra-ui/react';
const ForgotPasswordLink = () => {
    const [hover, setHover] = React.useState(false);

    return (
        <box>
            <Link
                _hover={{ borderBottom: "3px solid #FC5185" }}
                style={{
                    color: "#364F6B", fontWeight: '700'
                }}
            >
                ESQUECEU A SENHA?
            </Link>
        </box>

    );
};

export default ForgotPasswordLink;