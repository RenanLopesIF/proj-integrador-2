import React from "react";
import { Button, Link } from '@chakra-ui/react'



function MeuBotao(props) {
  const { text, background, color, icon, href } = props;

  const colors = {
    background,
    color,
  }





  return <Button as={Link} leftIcon={icon} href={href} _hover={{ textDecoration: 'none' }} display='flex' justifyContent={'flex-start'}
    alignItems={'center'} borderRadius={'9px'} fontSize={'1.3rem'} w='10rem' h='3rem'
    gap={'10px'} paddingLeft={'1.5rem'} style={colors}>{text}
  </Button>

}

export default MeuBotao;
