import { Box, Text } from '@chakra-ui/react'
import React, { useState } from 'react';
import { useColorModeValue } from '../ui/color-mode'

const Projects = () => {
  return (
    <Box 
      w="60%" 
      textAlign="center"
      h="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      userSelect={"none"}
      flexDir="column"
    >
      <Text fontSize="5.2vw" fontFamily={"alien"} fontWeight="100" color="brand.100">
        Proyectos realizados:
      </Text>
      
    </Box>
  )
}

export default Projects