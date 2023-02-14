import { Badge } from '@chakra-ui/react';
import React from 'react';

function EventState({ start, end }) {
  function getEventState() {
    const startDate = new Date(start).getTime();
    const endDate = new Date(end).getTime();

    const curDate = Date.now();
    if (curDate > endDate) return 'antigo';
    if (curDate > startDate) return 'acontecendo agora';
    return 'em breve';
  }
  return (
    <Badge
      borderRadius={4}
      padding={1}
      colorScheme={getEventState() === 'em breve' ? 'azulClaro' : getEventState() === 'antigo' ? 'cinza' : 'yellow'}
    >
      {getEventState()}
    </Badge>
  );
}

export default EventState;
