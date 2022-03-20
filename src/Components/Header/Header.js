import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import styles from './styles/style.module.css'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';  
// import { useHistory } from "react-router-dom";


import logo from "../../Asset/images/logoR.png";

const Header = ({auth, setAuth, userId}) => {
  // console.log("header " + auth);
  // const history = useHistory();

  const logOut = async () => {
    await firebase.auth().signOut()
	
   .then(function() {
    // let path = "/";
    // history.push(path);
   }, function(error) {
      console.log('Signout Failed')  
   });
  }
  return (
    <header>
      <Navbar bg="light" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="logo" />
            <b>REFERRAL HUB</b>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {auth?<>
              <Nav.Link href={`/users/${userId}`}>
                <i className="fas fa-user"></i>
              </Nav.Link>
              <Nav.Link href={`/users/${userId}`}>
                <i className="fas fa-bell"></i>
              </Nav.Link>
              <Nav.Link>
                <button style={{border: "none", backgroundColor: "inherit"}} onClick={logOut} ><i  className="fas fa-sign-out-alt"></i></button>
                
              </Nav.Link>
              </>:<>
              <Nav.Link className={styles.signIn} href="/signin">
                Sign in
              </Nav.Link>
              <Nav.Link className={styles.signUp} href="/signup">
                Sign up
              </Nav.Link></>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
