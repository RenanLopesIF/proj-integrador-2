import { Box, Flex } from '@chakra-ui/react';
import BarraPesquisa from './../../components/BarraPesquisa';
function Publications() {
  return (
    <Box>
      <Flex>
        <BarraPesquisa text="Pesquise pela descrição do evento" />
      </Flex>
    </Box>
  );
}

export default Publications;
