import { Box, Flex, Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import SideBar from './SideBar';

function Layout({ children }) {
  return (
    <Grid gridAutoRows="1fr" gridTemplateColumns="0.18fr 1fr">
      <GridItem width="18vw" h="100vh">
        <SideBar />
      </GridItem>
      <GridItem>
        <Box w="full" h="full" overflowX="hidden">
          {children}
        </Box>
      </GridItem>
    </Grid>
  );
}

export default Layout;
