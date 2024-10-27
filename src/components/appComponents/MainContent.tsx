import React from 'react';
import { Box, Heading} from '@chakra-ui/react';

const MainContent: React.FC = () => {
  return (
    <Box
      w={"100%"}
      h={"100vh"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Heading fontWeight={"1000"} fontSize={"20vw"} fontFamily={"heading"} color={"#7ed957"} >
        alt.
      </Heading>
    </Box>
  );
};

export default MainContent;