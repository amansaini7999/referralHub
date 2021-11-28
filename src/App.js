import React from 'react';
import Cards from './Components/cards';

//install npm install react-icons --save

import signIn from './Components/Login/signIn';
import { Container } from 'react-bootstrap';
import Header from './Components/Header/Header';
import IntroCards from './Components/IntroCards';
import Footer from './Components/Footer/Footer';
import Jobs from './Components/createJob';
// import Login from './Components/Login/login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <main className='py-3 bg-light contextual'>
          <Container>
            <Route path='/' component={IntroCards} exact />
            <Route exact path='/login' component={signIn} />
            <Route exact path='/createjob' component={Jobs} />
          </Container>
        </main>
        <Footer />
      </Router>
    </>
  );
};

export default App;
