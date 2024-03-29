import React from 'react';
import { Avatar, Flex, HStack, Text } from '@chakra-ui/react';

import { getDateDiff } from '../../utils/getDateDiff';

function PostAutorWithDate({ autor, postCreationDate }) {
  const createdAt = new Date(postCreationDate).getTime();
  return (
    <HStack>
      {autor.image ? <Avatar src={autor.image} /> : <Avatar />}
      <Flex flexDir="column" gap={1}>
        <Text color="black" fontSize={16}>
          {autor.name}
        </Text>
        <Text color="gray.500" fontSize={14}>
          {getDateDiff(createdAt)}
        </Text>
      </Flex>
    </HStack>
  );
}

export default PostAutorWithDate;
