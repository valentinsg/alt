import React from 'react';
import { Link } from '@chakra-ui/react';
import { Flex } from '@chakra-ui/react';
import ToggleColorModeButton from '../ui/ToggleColorModeButton';
import { useColorModeValue } from '../ui/color-mode';

const Header: React.FC = () => {
  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      as="header"
      position="fixed"
      top="0"
      bg={useColorModeValue("white", "gray.1000")}
      width="100%"
      zIndex="1000"
      boxShadow="md"
      p={12}
    >
      <nav>
      <Link href="#home" mx="2">Inicio</Link>
      <Link href="#MainContent" mx="2">Quiénes Somos</Link>
      <Link href="#projects" mx="2">Proyectos</Link>
      <Link href="#contact" mx="2">Contacto</Link>
      </nav>
      <ToggleColorModeButton />
    </Flex>
  );
};

export default Header;
