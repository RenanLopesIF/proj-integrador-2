import { Avatar, AvatarBadge } from '@chakra-ui/react';
import React from 'react';
import { HiCamera } from 'react-icons/hi';

function UserChooseImage({ username }) {
  return (
    <Avatar name={username} size="xl" bg="primary.300">
      <AvatarBadge right="10px" bottom="4px" bg="#FFF" border="none" p={1}>
        <HiCamera color="#000" width="full" size={28} />
      </AvatarBadge>
    </Avatar>
  );
}

export default UserChooseImage;
