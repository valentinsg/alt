import React from 'react';
import { Box, Text, VStack } from '@chakra-ui/react';
import { useColorModeValue } from '../ui/color-mode';

const AboutUs: React.FC = () => {
  return (
    <Box w="60%" textAlign="center" >
      <VStack gap="2">
        <Text fontSize="5.2vw" fontFamily={"alien"} fontWeight="100"  color="brand.100">
          Quiénes Somos
        </Text>
        <Text fontSize="3xl" textAlign={"left"} color={useColorModeValue("black", "gray.1000")}>
          Somos <Text as="span" fontWeight="100" fontFamily={"alien"}  color="brand.100">alt.</Text> una empresa de soluciones digitales que ofrece desde programación web hasta estrategias de contenido y branding, ofrecemos un servicio integral que ayuda a los negocios a posicionarse y crecer en el entorno digital. <br/>
          Tenemos un enfoque autónomo y contamos con un equipo flexible, por lo cuál podemos adaptarnos a las necesidades específicas de cada cliente. Ya sea una plataforma para gestionar pedidos, una estrategia para redes sociales, una web que represente su marca, etc.
          Nuestro objetivo es facilitar la digitalización de negocios, demostrando cómo una buena presencia online y soluciones personalizadas pueden transformar la manera en que los clientes interactúan con su negocio.
        </Text>
      </VStack>
    </Box>
  );
};

export default AboutUs;
