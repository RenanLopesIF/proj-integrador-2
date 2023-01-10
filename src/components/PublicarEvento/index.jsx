import React from "react";
import { Link, Box} from '@chakra-ui/react'
// import { MdSettings } from 'react-icons/md'




function PublicarEvento(props) {
  const {text, background, color} = props;
  const colors ={
    background,
    color,
  }


  return<Box >
    <Link display={'flex'} _hover={{textDecoration:'none'}} textDecoration={'none'} justifyContent={'center'} alignItems={'center'} borderRadius={'0.3rem'} fontSize={'18px'} w='14rem' h='2.5rem' gap={'4px'} style={colors}>{text}
    </Link>
  </Box>
}

export default PublicarEvento;
