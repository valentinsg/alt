import { Box, Heading, Text, Flex, Icon } from '@chakra-ui/react';
import { useColorModeValue } from '../ui/color-mode';
import {Tooltip} from '../ui/tooltip';

interface ProjectsContainerProps {
  bgImage?: string;
  gifUrl?: string;
  title: string;
  description: string;
  technologies: string[];
  url?: string;
}

const ProjectsContainer: React.FC<ProjectsContainerProps> = ({
  bgImage,
  gifUrl,
  title,
  description,
  technologies,
  url
}) => {
  return (
    <Box
      w="100%"
      h={{ base: "300px", md: "375px" }}
      borderRadius="lg"
      boxShadow="lg"
      overflow="hidden"
      position="relative"
    >
      <Box
        bgImage={bgImage}
        bgSize="cover"
        bgPosition="center"
        h="100%"
        w="100%"
        position="absolute"
        top="0"
        left="0"
        zIndex={-1}
        filter="blur(5px)"
      />
      <Flex
        h="100%"
        w="100%"
        position="absolute"
        top="0"
        left="0"
        zIndex={0}
        bg={useColorModeValue("white", "gray.800")}
        opacity="0.9"
        p="4"
        flexDir="column"
        justifyContent="space-between"
      >
        <Box>
          <Heading fontSize={{ base: "1.5rem", md: "2rem" }} color="brand.100">
            {title}
          </Heading>
          <Text fontSize={{ base: "1rem", md: "1.2rem" }} color="gray.600">
            {description}
          </Text>
        </Box>
        <Flex justifyContent="space-between">
          {technologies.map((tech, i) => (
            <Tooltip label={tech} key={i}>
              <Icon as={tech} boxSize="1.5rem" color="gray.600" />
            </Tooltip>
          ))}
          {url && (
            <a href={url} target="_blank" rel="noreferrer">
              <Icon as="Link" boxSize="1.5rem" color="brand.100" />
            </a>
          )}
        </Flex>
      </Flex>
    </Box>
  )
}