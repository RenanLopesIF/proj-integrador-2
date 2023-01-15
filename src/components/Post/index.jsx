import React from 'react';
import { Box, HStack, Text, Flex, VStack, useDisclosure } from '@chakra-ui/react';
import { MdAlarmOff, MdAlarmOn, MdOutlineStarBorderPurple500 } from 'react-icons/md';
import { BiMap, BiComment } from 'react-icons/bi';
import { TbMap2 } from 'react-icons/tb';
import Faixaetaria from '../FaixaEtaria';
import { convertEventDate } from '../../utils/convertEventDate';
import EventState from '../EventState';
import PostAutorWithDate from '../PostAutorWithDate';
import PostShortInfo from '../PostShortInfo';
import EventTitle from '../EventTitle';
import EventDescription from '../EventDescription';
import PostImage from '../PostImage';
import ButtonWithLeftIcon from '../ButtonWithLeftIcon';
import ModalAddressDetails from '../ModalAddressDetails';

function Post({ event }) {
  const contentPadding = 3;
  const interesedCount = 2;
  const { isOpen, onClose, onOpen } = useDisclosure({ id: `${event.title}-${event.createdAt}` });

  return (
    <>
      <Box borderRadius="10px" bgColor="#FFF" width="100%" minH="50px">
        <HStack alignItems="flex-start" justifyContent="space-between" w="full" padding={contentPadding}>
          <PostAutorWithDate autor={event.autor} postCreationDate={event.createdAt} />
          <Flex alignItems="flex-end" flexDir="column" gap={1}>
            <EventState start={event.initDate} end={event.finallyDate} />
          </Flex>
        </HStack>
        <VStack
          alignItems="flex-start"
          px={contentPadding * 2}
          py={contentPadding}
          backgroundColor="#364f6b"
          width="100%"
          gap={2}
        >
          <HStack gap={6}>
            <PostShortInfo
              icon={<MdAlarmOn color="#F5F5F5" />}
              text={convertEventDate(event.initDate).date + ` - ${convertEventDate(event.initDate).hour}`}
            />
            <PostShortInfo
              icon={<MdAlarmOff color="#F5F5F5" />}
              text={convertEventDate(event.finallyDate).date + ` - ${convertEventDate(event.finallyDate).hour}`}
            />
          </HStack>
          <PostShortInfo
            icon={<BiMap color="#F5F5F5" />}
            text={String(`Em ${event.addressInfo.town}, À ${32}km`).toLocaleUpperCase()}
          />
        </VStack>
        <Box padding={contentPadding}>
          <HStack mt={2}>
            <EventTitle text={event.title} />
            <Faixaetaria label="+16" color="red.500" />
          </HStack>
          <Box>
            <EventDescription text={event.description} />
            {event.image && <PostImage src={event.image} />}
            <Flex justifyContent="flex-end" alignItems="center" mt={7}>
              <Text fontSize={12}>
                {interesedCount} {interesedCount === 1 ? 'interessado' : 'interessados'}
                {' e '}
                {event.totalComments} {event.totalComments === 1 ? 'comentário' : 'comentários'}
              </Text>
            </Flex>
            <Flex justifyContent="space-between" alignItems="center">
              <ButtonWithLeftIcon
                onClick={() => {}}
                icon={<MdOutlineStarBorderPurple500 size={24} />}
                text="Interessei"
              />
              <ButtonWithLeftIcon onClick={() => {}} icon={<BiComment size={24} />} text="Comentários" />
              <ButtonWithLeftIcon onClick={onOpen} icon={<TbMap2 size={24} />} text="Localização" />
            </Flex>
          </Box>
        </Box>
      </Box>
      <ModalAddressDetails
        autoAddress={event.display_address_name}
        isOpen={isOpen}
        onClose={onClose}
        address={event.addressDetails}
        LatLng={{ lat: event.location.latitude, lng: event.location.longitude }}
      />
    </>
  );
}

export default Post;
