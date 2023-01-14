import React, { useState } from 'react'
import { FormControl, FormLabel, Input, Icon } from '@chakra-ui/react'
import { RiCalendarLine } from 'react-icons/ri'
//AVISO: Tive dificuldade de alterar o icone da data e o placeholder, porém o jeito que eu fiz deve ser suficiente.
function InputDataHora() {
  const [data, setData] = useState('')

  return (

      <Input color = "#989494"id="data" type="datetime-local" w="200px" value={data}
        onChange={e => setData(e.target.value)}
        rightIcon={<Icon as={RiCalendarLine}/>}
      />
  );
}

export default InputDataHora;