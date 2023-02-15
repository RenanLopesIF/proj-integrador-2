import { Avatar, Flex, HStack, Text } from '@chakra-ui/react';
import React from 'react';
import { getDateDiff } from '../../utils/getDateDiff';
import { RiReplyFill } from 'react-icons/ri';

function CommentHeader({ replyFn, createdAt, author }) {
  return (
    <Flex justifyContent="space-between" w="full" h="full">
      <HStack>
        <Avatar size="sm" name="Reh lopes" />
        <Text ml={2}>{author}</Text>
        <Text ml="3">{getDateDiff(createdAt)}</Text>
      </HStack>
      <Flex cursor="pointer" alignItems="center" onClick={replyFn}>
        <RiReplyFill />
        <Text ml={1}>Responder</Text>
      </Flex>
    </Flex>
  );
}

export default CommentHeader;
