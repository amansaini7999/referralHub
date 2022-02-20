import React from "react";
import Cards from "./Components/cards";
import { Container } from 'react-bootstrap';
import Card1 from "./Components/Card1/Card1";
import Header from '../src/Components/Header/Header';
import IntroCards from './Components/IntroCards';
import Footer from './Components/Footer/Footer';
import Profile from "./Components/ProfilePage";
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import OpenJobs from "./Components/OpenJobs";
import OpenResumes from "./Components/OpenResumes";
import Submitted from "./Components/Submitted";
import LoginSignup from "./Components/Signin_and_Signup";

// const ref=false;
//install npm install react-icons --save
const App = () => {
  const [auth, setAuth] = useState(false || window.localStorage.getItem('auth') === 'true');
  const [token, setToken] = useState('');
  // console.log(auth);

  useEffect( () => {
		firebase.auth().onAuthStateChanged((userCred) => {
			if (userCred) {
				setAuth(true);
				window.localStorage.setItem('auth', 'true');
				userCred.getIdToken().then((token) => {
					setToken(token);
          console.log(token);
				});
			}
      else{
        setAuth(false);
        setToken('');
        window.localStorage.setItem('auth', 'false');
        // console.log(auth);
        // console.log(token);
        
      }
		});
	}, []);

  return (
    <>
      <Router>
      <Switch>
        <Route exact path = '/signup'>
            <LoginSignup  setAuth={setAuth} signin={false}/>
        </Route>
        <Route exact path = '/signin'>
            <LoginSignup  setAuth={setAuth} signin={true}/>
        </Route>
        <Route path='/'>
         <Header auth={auth} setAuth={setAuth}/>
        <Switch>
          <Route exact path="/" render={()=>
            {
              return(
                <>
                  <main className='py-3 bg-light contextual'>
                    <Container>
                      <IntroCards referral={false}/>
                      <OpenJobs/>
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
                      <OpenResumes/>
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
            <Route exact path="/refreq/submitted">
              <Submitted/>
            </Route>
            <Route exact path="/referral/createjob/submitted">
              <Submitted/>
            </Route>

        </Switch>
        </Route>

        </Switch>
      <Footer/>
    </Router>
      
    </>
      
  );
};

export default App;

