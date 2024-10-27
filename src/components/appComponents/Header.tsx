import React from 'react';
import { Link } from '@chakra-ui/react';
import { Flex } from '@chakra-ui/react';

const Header: React.FC = () => {
  return (
    <Flex
      justifyContent={"center"}
      as="header"
      position="fixed"
      top="0"
      width="100%"
      bg="white"
      zIndex="1000"
      boxShadow="md"
      p={6}
    >
      <nav>
        <Link href="#home" mx="2">Inicio</Link>
        <Link href="#MainContent" mx="2">Quiénes Somos</Link>
        <Link href="#projects" mx="2">Proyectos</Link>
        <Link href="#contact" mx="2">Contacto</Link>
      </nav>
    </Flex>
  );
};

export default Header;
