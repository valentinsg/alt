import React from 'react';
import './App.css';
import { Provider } from "./components/ui/provider"
import Header from './components/appComponents/Header';
import AboutUs from './components/appComponents/AboutUs';
import Contact from './components/appComponents/Contact';
import MainContent from './components/appComponents/MainContent';
import Projects from './components/appComponents/Projects';
import { Flex, Box } from '@chakra-ui/react';

function App() {
  return (
    <Provider>
      <Box>
        <Header />
        <Flex alignItems={"center"} flexDir={"column"} >
          <MainContent />
          <AboutUs />
          <Projects />
          <Contact />
        </Flex>
      </Box>
    </Provider>

  );
}

export default App;
