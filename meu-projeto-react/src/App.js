import React from 'react';
import { ChakraProvider, Box, Text, extendTheme } from '@chakra-ui/react';
import Navbar from './components/Navbar';

const colors = {
  primary: {
    100: '#B3D9E6',
    200: '#96bbc8',
    300: '#547984',
  },
  accent: {
    100: '#66B2D6',
    200: '#005676',
  },
  text: {
    100: '#333333',
    200: '#5c5c5c',
  },
  bg: {
    100: '#E6F2F8',
    200: '#dce8ee',
    300: '#b4bfc5',
  },
};

const theme = extendTheme({
  colors,
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
});

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Box padding={8}>
        {/* Conteúdo do seu portfólio */}
        <Text fontSize="xl" fontWeight="bold" marginBottom={4}>
          Bem-vindo ao meu portfólio!
        </Text>
        <Text>
          Aqui você pode adicionar o conteúdo das seções About, Projects e
          Contact.
        </Text>
      </Box>
    </ChakraProvider>
  );
};

export default App;
