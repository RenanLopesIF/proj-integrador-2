import { Avatar, AvatarBadge, Box } from '@chakra-ui/react';
import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { HiCamera } from 'react-icons/hi';
import api from '../../services/axios';
import { useAuth } from '../../hooks/auth';
import { toast } from 'react-toastify';

function DropzoneUserImage({ fileRef, userImg }) {
  const dropzoneRef = useRef(null);
  const [imgFile, setFiles] = useState();
  const { userData } = useAuth();

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

  const handleUserImage = useCallback(async () => {
    const form = new FormData();
    form.append('profile-image', imgFile);

    await api.put(`/usuario/upload/profile-image/${userData.ID}`, form);
    toast.info('Sua imagem de perfil foi alterada');
  }, [imgFile]);

  useEffect(() => {
    if (fileRef) {
      fileRef.current = imgFile;
    }

    if (imgFile) {
      handleUserImage();
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
    <Avatar src={imgFile?.preview || userImg} size="xl" bg="primary.300">
      <Box {...getRootProps({ className: 'dropzone', ref: dropzoneRef })} cursor="pointer">
        <input {...getInputProps()} />
        <AvatarBadge onClick={() => {}} right="10px" bottom="4px" bg="#FFF" border="none" p={1}>
          <HiCamera color="#000" width="full" size={28} />
        </AvatarBadge>
      </Box>
    </Avatar>
  );
}

export default DropzoneUserImage;
