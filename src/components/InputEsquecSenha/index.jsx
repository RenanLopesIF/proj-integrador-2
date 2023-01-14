import React from 'react';

const ForgotPasswordLink = () => {
    const [hover, setHover] = React.useState(false);

    return (
        <a
            href="pagina-de-recuperacao-de-senha"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{
                textDecoration: hover ? 'underline' : 'none',
                textDecorationColor: hover ? '#FC5185' : 'black',
                fontWeight: '700', color:'#364F6B', 
            }}
        >
            ESQUECEU A SENHA?
        </a>
    );
};

export default ForgotPasswordLink;