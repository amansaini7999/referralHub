import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './Components/Header';
import IntroCards from './Components/IntroCards';
import Footer from './Components/Footer/Footer';


const App = () => {
  return (
    <>
      <Header />
      <main className='py-3 bg-light contextual'>
        <Container>
          <IntroCards/>
        </Container>
      </main>
      <Footer/>
    </>
  );
};

export default App;
