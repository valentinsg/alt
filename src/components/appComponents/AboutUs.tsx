import React from 'react';
import { Box, Text, VStack } from '@chakra-ui/react';

const AboutUs: React.FC = () => {
  return (
    <Box w="60%" textAlign="center" >
      <VStack gap="4">
        <Text fontSize="5vw" fontFamily={"alien"} color="brand.100">
          Quiénes Somos
        </Text>
        <Text fontSize="lg" color="gray.200">
          Somos <Text as="span" fontWeight="bold" color="green.400">alt.</Text>, una empresa de soluciones digitales que combina creatividad y habilidad técnica para llevar a cabo proyectos innovadores. Desde programación web hasta estrategias de contenido y branding, ofrecemos un servicio integral que ayuda a los negocios a posicionarse y crecer en el entorno digital.
        </Text>
        <Text fontSize="lg" color="gray.200">
          Con un enfoque autónomo y un equipo flexible, podemos desarrollar software complejo o contenido de alta calidad, adaptándonos a las necesidades específicas de cada cliente. Ya sea una plataforma para gestionar pedidos, una estrategia para redes sociales, o una web que represente su marca, en <Text as="span" fontWeight="bold" color="green.400">alt.</Text> tenemos las herramientas y la experiencia para hacerlo realidad.
        </Text>
        <Text fontSize="lg" color="gray.200">
          Nuestro objetivo es facilitar la digitalización de negocios, demostrando cómo una buena presencia online y soluciones personalizadas pueden transformar la manera en que los clientes interactúan con su marca. Hablamos en su idioma — ya sea en español o en inglés — y adaptamos nuestras soluciones para maximizar el impacto de su negocio en el mundo digital.
        </Text>
      </VStack>
    </Box>
  );
};

export default AboutUs;
