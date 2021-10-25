import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './Components/Header';

const App = () => {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container></Container>
      </main>
    </>
  );
};

export default App;
