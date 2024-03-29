import React, { useState } from 'react';
import { InputGroup, InputRightElement, Box, useTheme } from '@chakra-ui/react';
import { AiOutlineCalendar } from 'react-icons/ai';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function InputNiver() {
  const [selectedDate, setSelectedDate] = useState(null);
  const { colors } = useTheme();

  return (
    <Box borderWidth="2px" bg="white" width={'25%'}>
      <InputGroup w="18%">
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          placeholderText=" Data de nascimento"
          dateFormat="dd/MM/yyyy"
          showYearDropdown
          showMonthDropdown
          dropdownMode="select"
        />
        <InputRightElement>
          <AiOutlineCalendar color={colors.primary[300]} size={'80%'} />
        </InputRightElement>
      </InputGroup>
    </Box>
  );
}

export default InputNiver;
