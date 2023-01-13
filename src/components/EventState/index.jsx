import { Badge } from '@chakra-ui/react';
import React from 'react';

function EventState({ start, end }) {
  function getEventState() {
    const curDate = Date.now();
    if (curDate > end) return 'antigo';
    if (curDate > start) return 'acontecendo agora';
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
