import React, { useRef, useState } from 'react';
import { Box, HStack, Text, Flex, VStack, useDisclosure, Textarea, Divider, Center } from '@chakra-ui/react';
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
import Comment from '../Comment';
import ReplyContainer from '../ReplyContainer';
import { useTheme } from '@emotion/react';

const comments = [
  {
    id: '11',
    author: 'Renan Lopes',
    message: 'Bonito',
    createdAt: 1673996285471,
    replies: [
      { author: 'Aaa', message: 'Tbm', id: '11a', createdAt: 1673996285471 },
      { author: 'Bbb', message: 'Nao', id: '11b', createdAt: 1673996285471 },
    ],
  },
  {
    id: '22',
    author: 'Amaury',
    message: 'Haha',
    createdAt: 1673987285471,
    replies: [
      { author: 'Kkk', message: 'pode', id: '22a', createdAt: 1673996285471 },
      { author: 'Jjj', message: 'quero', id: '22b', createdAt: 1673996285471 },
    ],
  },
];

function Post({ event }) {
  const contentPadding = 3;
  const interesedCount = 2;
  const { colors } = useTheme();
  const inputCommentRef = useRef();

  const scrollStyle = {
    '&::-webkit-scrollbar': {
      height: '4px',
      width: '4px',
      background: '#DBDBDB',
      borderRadius: '30px',
    },
    '&::-webkit-scrollbar-thumb': {
      height: '4px',
      width: ' 4px',
      backgroundColor: colors.primary[300],
      borderRadius: '30px',
    },
  };

  const { isOpen, onClose, onOpen } = useDisclosure({ id: `${event.titulo}-${event.criado_em}` });
  const [commentsIsOpen, setCommentsIsOpen] = useState(false);

  function handleComments() {
    setCommentsIsOpen((prev) => !prev);
  }

  function handleReplyComment(commentId, commentAuthor) {
    console.log(commentId);
    const rr = /^@+\w+ ?\w+,/gm;
    const oldInputValue = String(inputCommentRef.current.value).replace(rr, '');
    inputCommentRef.current.value = `@${commentAuthor},${oldInputValue}`;
    inputCommentRef.current.focus();
  }

  return (
    <>
      <Box borderRadius="10px" bgColor="#FFF" width="100%" minH="50px" pb={contentPadding}>
        <HStack alignItems="flex-start" justifyContent="space-between" w="full" padding={contentPadding}>
          <PostAutorWithDate
            autor={{ imagem: event.usuario_avatar, name: event.usuario_nome }}
            postCreationDate={event.criado_em}
          />
          <Flex alignItems="flex-end" flexDir="column" gap={1}>
            <EventState start={event.data_inicio} end={event.data_fim} />
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
              icon={<MdAlarmOn color={colors.cinza[50]} />}
              text={convertEventDate(event.data_inicio).date + ` - ${convertEventDate(event.data_inicio).hour}`}
            />
            <PostShortInfo
              icon={<MdAlarmOff color={colors.cinza[50]} />}
              text={convertEventDate(event.data_fim).date + ` - ${convertEventDate(event.data_fim).hour}`}
            />
          </HStack>
          <PostShortInfo
            icon={<BiMap color={colors.cinza[50]} />}
            text={String(`Em ${event.cidade}, À ${32}km`).toLocaleUpperCase()}
          />
        </VStack>
        <Box padding={contentPadding}>
          <HStack mt={2}>
            <EventTitle text={event.titulo} />
            <Faixaetaria label="+16" color="red.500" />
          </HStack>
          <Box>
            <EventDescription text={event.descricao} />
            {event.url_imagem && <PostImage src={`http://localhost:3004/${event.url_imagem}`} />}
            <Flex justifyContent="flex-end" alignItems="center" mt={7}>
              <Text fontSize={12}>
                {event.total_curtidas} {event.total_curtidas === 1 ? 'interessado' : 'interessados'}
                {' e '}
                {event.total_comentarios} {event.total_comentarios === 1 ? 'comentário' : 'comentários'}
              </Text>
            </Flex>
            <Flex justifyContent="space-between" alignItems="center">
              <ButtonWithLeftIcon
                onClick={() => {}}
                icon={<MdOutlineStarBorderPurple500 size={24} />}
                text="Interessei"
              />
              <ButtonWithLeftIcon onClick={handleComments} icon={<BiComment size={24} />} text="Comentários" />
              <ButtonWithLeftIcon onClick={onOpen} icon={<TbMap2 size={24} />} text="Localização" />
            </Flex>
          </Box>

          <VStack display={commentsIsOpen ? 'flex' : 'none'} w="full" flexDir="column" px={contentPadding}>
            <Center w="full">
              <Divider my={2} w="70%" />
            </Center>
            <Box w="full" css={scrollStyle} maxH="250px" overflow="auto" pr={2}>
              {event.comentarios.map((comment) => {
                return (
                  <>
                    <Box my={2}>
                      <Comment
                        author={comment.autor}
                        createdAt={comment.ID}
                        text={comment.descricao}
                        handleReply={() => {
                          handleReplyComment(comment.ID, comment.autor);
                        }}
                      />
                    </Box>
                    <ReplyContainer>
                      <VStack>
                        {comment.respostas.map((reply) => (
                          <Comment
                            author={reply.autor}
                            createdAt={reply.ID}
                            text={reply.descricao}
                            handleReply={() => {
                              handleReplyComment(comment.ID, reply.autor);
                            }}
                          />
                        ))}
                      </VStack>
                    </ReplyContainer>
                  </>
                );
              })}
            </Box>
            <Textarea
              ref={inputCommentRef}
              w="100%"
              h="80px"
              bgColor="cinza.50"
              color="cinza.500"
              focusBorderColor="cinza.100"
              borderColor="cinza.200"
              borderRadius="4px"
              _hover={{
                borderColor: 'cinza.300',
              }}
              _placeholder={{
                color: 'cinza.400',
              }}
              placeholder="Adicionar um comentário"
              size="sm"
              resize="none"
            />
          </VStack>
        </Box>
      </Box>
      <ModalAddressDetails
        autoAddress={event.auto_descricao_endereco}
        isOpen={isOpen}
        onClose={onClose}
        address={event.descricao_endereco}
        LatLng={{ lat: event.latitude, lng: event.longitude }}
      />
    </>
  );
}
// #F0F2F5
export default Post;
