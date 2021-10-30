import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './Components/Header';
import IntroCards from './Components/IntroCards';

const App = () => {
  return (
    <>
      <Header />
      <main className='py-3 bg-light contextual'>
        <Container>
          <IntroCards/>
        </Container>
      </main>
    </>
  );
};

export default App;
