import React from "react";
import Cards from "./Components/cards";
import { Container } from 'react-bootstrap';
import Card1 from "./Components/Card1/Card1";
import Header from '../src/Components/Header/Header';
import IntroCards from './Components/IntroCards';
import Footer from './Components/Footer/Footer';
import Profile from "./Components/ProfilePage";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// const ref=false;
//install npm install react-icons --save
const App = () => {
  return (
    <>
        <Router>
      <Header/>
      <Switch>
        <Route exact path="/" render={()=>
          {
            return(
              <>
                <main className='py-3 bg-light contextual'>
                  <Container>
                    <IntroCards referral={false}/>
                  </Container>
                </main>
              </>
            )
          }}>
            </Route>
            <Route exact path="/referral" render={()=>
          {
            return(
              <>
                <main className='py-3 bg-light contextual'>
                  <Container>
                    <IntroCards referral={true}/>
                  </Container>
                </main>
              </>
            )
          }}>
          </Route>
          
          <Route exact path="/user">
            <Profile isReferee={true}/>
          </Route>
          <Route exact path="/referral/createjob">
            <Cards
                    heading="Create JOB"
                    desc="Kindly fill in the details to proceed"
                    cont="CreateJob"
                  />
          </Route>
          <Route exact path="/refreq">
            <Card1/>
          </Route>
          
        </Switch>
      <Footer/>
    </Router>
    </>
     
       
    
    
  );
};

export default App;
