import { Box, Input } from "@chakra-ui/react";
import React from "react";

function BarraDePesqisa(props) {
  const { text } = props

  return <Box>
    <Input width={'100%'} placeholder={text} borderRadius={'1rem'}
     border={'1px solid #A9A9A9'} variant={'disabled'} _placeholder={{ opacity: 1, color: '#C0C0C0' }}
     fontWeight={'medium'}  focusBorderColor='greey' />
  </Box>
}
export default BarraDePesqisa
