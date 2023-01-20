import { Box, Center, Grid, GridItem } from '@chakra-ui/react';
import React from 'react';

function ReplyContainer({ children }) {
  return (
    <Box w="full" h="full">
      <Grid w="full" h="full" gridAutoRows="1fr" gridTemplateColumns="30px 1fr">
        <GridItem width="30px" h="100%">
          <Center h="full">
            <Box h="95%" w="1px" bgColor="cinza.100" />
          </Center>
        </GridItem>
        <GridItem>{children}</GridItem>
      </Grid>
    </Box>
  );
}

export default ReplyContainer;
