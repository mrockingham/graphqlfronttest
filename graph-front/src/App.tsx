import React from 'react';
import logo from './logo.svg';
import './App.css';
import BasicTable from './components/dataTable';
import { Box, Container } from '@chakra-ui/react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
       
      <Container maxW='2xl' bg='blue.600' centerContent>
  <Box padding='4' bg='blue.400' color='black' maxW='md'>

      <BasicTable />
  </Box>
</Container>
      </header>
    </div>
  );
}

export default App;
