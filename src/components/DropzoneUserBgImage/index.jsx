import { Box, Circle } from '@chakra-ui/react';
import React, { useEffect, useState, useRef } from 'react';
import { useDropzone } from 'react-dropzone';
import { HiCamera } from 'react-icons/hi';

function DropzoneUserBgImage({ fileRef, handlePreview }) {
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

    if (imgFile && handlePreview) {
      handlePreview(imgFile.preview);
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
    <Box {...getRootProps({ className: 'dropzone', ref: dropzoneRef })} cursor="pointer">
      <input {...getInputProps()} />
      <Circle zIndex={100} bgColor="#FFF" p={1} w="32px" h="32px">
        <HiCamera color="#000" width="full" size={28} />
      </Circle>
    </Box>
  );
}

export default DropzoneUserBgImage;
