import React from 'react';
import CommentsContainer from '../CommentContainer';
import CommentHeader from '../CommentHeader';
import { Text } from '@chakra-ui/react';

function Comment({ text, handleReply, createdAt, author }) {
  return (
    <CommentsContainer>
      <CommentHeader author={author} createdAt={createdAt} replyFn={handleReply} />
      <Text mt={2}>{text}</Text>
    </CommentsContainer>
  );
}

export default Comment;
