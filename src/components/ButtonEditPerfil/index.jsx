import React, { useState } from 'react';
import { Icon, Button,Box } from '@chakra-ui/react';
import { MdModeEditOutline } from 'react-icons/md';

function ButtonEditPerfil() {
    const [isEditing, setIsEditing] = useState(false);

    return (
        <Box>
            <Button rounded="md" p={4}
                variantColor="teal"
                onClick={() => setIsEditing(!isEditing)}
                leftIcon={<MdModeEditOutline name="edit" size="20px" />}>

                Editar perfil
            </Button>
        </Box>
    );
}

export default ButtonEditPerfil;