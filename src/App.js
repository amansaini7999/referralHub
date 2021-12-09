import React from "react";
import Cards from "./Components/cards";
import { Container } from 'react-bootstrap';
import Card1 from "./Components/Card1/Card1";
import Header from '../src/Components/Header/Header';
import IntroCards from './Components/IntroCards';
import Footer from './Components/Footer/Footer';

//install npm install react-icons --save
const App = () => {
  return (
    <>
      <Header />
      <main className='py-3 bg-light contextual'>
        <Container>
          <IntroCards/>
        </Container>
      </main>
      <Footer />
    <Cards
      heading="Create JOB"
      desc="Kindly fill in the details to proceed"
      cont="CreateJob"
      />
      <Card1 />
      
      </>
     
       
    
    
  );
};

export default App;
