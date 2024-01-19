import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import { Box, Center, Heading } from '@chakra-ui/react';
import imagen from './image/imagen.png';
import ListaDeEventos from './componentes/ListaDeEventos';


const theme = extendTheme({

});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box className='aplicacion-eventos'>
        <Center className='imagen'>
          <img src={imagen} alt='logo' className='logo-imagen' />
        </Center>
        <Box className='lista-eventos'>
          <Heading as='h1' fontSize='25px' textAlign='center' margin='20px 0'>
            ReservaFiesta
          </Heading>
          <ListaDeEventos />
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;

