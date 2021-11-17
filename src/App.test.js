import React from "react";
import { Container } from "react-bootstrap";
import Header from "./Components/Header/Header";
//import IntroCards from "./Components/IntroCards";
import Footer from "./Components/Footer/Footer";
import ProfilePage from "./Components/ProfilePage";

//install npm install react-icons --save
const App = () => {
  return (
    <>
      <Header />
      <main className="py-3 bg-light contextual">
        <Container>
          {/*<IntroCards /> */}
          <ProfilePage isReferee={true} />
        </Container>
      </main>
      <Footer />
    </>
  );
};
export default App;
/*

const IntroCards = () => {
  return (
    
      <Header />
      <main className="py-3 bg-light contextual">
        <Container>
          <IntroCards />
        </Container>
      </main>
      <Footer />
    </>
  );
};

  <Cards
      heading="Create JOB"
      desc="Kindly fill in the details to proceed"
      cont="CreateJob"
    />
*/
