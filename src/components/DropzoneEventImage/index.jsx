import { Box, Button, Center, Image, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import { useDropzone } from 'react-dropzone';

function DropzoneEventImage({ fileRef }) {
  const dropzoneRef = useRef(null);
  const [imgFile, setFiles] = useState();

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': [],
    },
    onDrop: (acceptedFiles) => {
      const file = Object.assign(acceptedFiles[0], {
        preview: URL.createObjectURL(acceptedFiles[0]),
      });

      setFiles(file);
    },
  });

  useEffect(() => {
    if (fileRef) {
      fileRef.current = imgFile;
    }
  }, [imgFile]);

  useEffect(() => {
    return () => {
      if (imgFile) {
        URL.revokeObjectURL(imgFile.preview);
      }
    };
  }, []);

  return (
    <Center w="full" h="full" flexDir="column">
      <Box
        w="80%"
        maxH="84.69px"
        h="full"
        {...getRootProps({ className: 'dropzone', ref: dropzoneRef })}
        cursor="pointer"
      >
        <input {...getInputProps()} />
        <Center w="full" h="full" border="1px dashed" borderColor="cinza.400" borderRadius={8} overflow="hidden">
          {imgFile && imgFile.preview ? (
            <Image objectFit="contain" bgColor="cinza.100" src={imgFile.preview} w="100%" h="100%" />
          ) : (
            <Center>
              <Text fontSize={20} fontWeight={600} color="cinza.400">
                PNG
              </Text>
            </Center>
          )}
        </Center>
      </Box>
      <Button
        _hover={{ bgColor: 'primary.200' }}
        _active={{ bgColor: 'primary.100' }}
        w="full"
        h="40px"
        mt={3}
        fontSize={10}
        borderRadius={4}
        bgColor="primary.300"
        color="#FFF"
        textTransform="uppercase"
        onClick={() => {
          // @ts-expect-error
          dropzoneRef?.current?.click?.();
        }}
      >
        {imgFile ? 'Alterar imagem ' : 'Adicionar imagem'}
      </Button>
    </Center>
  );
}

export default DropzoneEventImage;
