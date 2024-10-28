import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { useColorModeValue } from '../ui/color-mode';

const MainContent: React.FC = () => {
  return (
    <Box
      w="100%"
      h="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      userSelect={"none"}
      flexDir="column"
      mt={-10}
    >
      <Text
        fontWeight={"1000"}
        fontSize={"20vw"}
        fontFamily={"heading"}
        color={"#7ed957"}
        textShadow={useColorModeValue("2px 2px 4px rgba(0, 0, 0, 0.5)", "2px 2px 4px rgba(126, 217, 87, 0.3)")}
      >
        alt.
      </Text>
      <Text
        fontSize="2.6vw"
        fontFamily="alien"
        color="#7ed957"
        fontWeight={"500"}
        mt="-10.6vw"
        ml={"6vw"}
        letterSpacing={"0.2vw"}
        textShadow={useColorModeValue("2px 2px 4px rgba(0, 0, 0, 0.5)", "2px 2px 4px rgba(126, 217, 87, 0.3)")}
      >
        Digital Solutions
      </Text>
    </Box>
  );
};

export default MainContent;
