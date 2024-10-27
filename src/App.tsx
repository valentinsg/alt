import React from 'react';
import './App.css';
import { Provider } from "./components/ui/provider"
import Header from './components/appComponents/Header';
import AboutUs from './components/appComponents/AboutUs';
import Contact from './components/appComponents/Contact';
import MainContent from './components/appComponents/MainContent';
import Projects from './components/appComponents/Projects';
import ToggleColorModeButton from './components/ui/ToggleColorModeButton';
import { Flex } from '@chakra-ui/react';

function App() {
  return (
    <Provider>
      <Header />
      <Flex alignItems={"center"} flexDir={"column"} gap={10}>
        <ToggleColorModeButton />
        <MainContent />
        <Projects />
        <AboutUs />
        <Contact />
      </Flex>
    </Provider>

  );
}

export default App;
