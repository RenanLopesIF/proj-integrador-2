import React, { useState } from 'react';
import { Icon, Button } from '@chakra-ui/react';
import { MdModeEditOutline } from 'react-icons/md';

function EditarPerfilButton() {
    const [isEditing, setIsEditing] = useState(false);

    return (
        <div>
            <Button rounded="md" p={4}
                variantColor="teal"
                onClick={() => setIsEditing(!isEditing)}
                leftIcon={<MdModeEditOutline name="edit" size="20px" />}>

                Editar perfil
            </Button>
        </div>
    );
}

export default EditarPerfilButton;