import GoogleLogin from 'react-google-login';
import { Grid, Paper } from '@material-ui/core';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const paperStyle = {
  padding: 20,
  height: '73vh',
  width: 300,
  margin: '0 auto',
};
function App() {
  const [loginData, setLoginData] = useState(
    localStorage.getItem('loginData')
      ? JSON.parse(localStorage.getItem('loginData'))
      : null
  );

  const handleFailure = (result) => {
    alert(result);
  };

  const handleLogin = async (googleData) => {
    //   const res = await fetch('/api/google-login', {
    //     method: 'POST',
    //     body: JSON.stringify({
    //       token: googleData.tokenId,
    //     }),
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //   });

    //   const data = await res.json();
    //   setLoginData(data);
    //   localStorage.setItem('loginData', JSON.stringify(data));
    console.log(googleData);
  };
  // const handleLogout = () => {
  //   localStorage.removeItem('loginData');
  //   setLoginData(null);
  // };

  return (
    <Paper style={paperStyle}>
      <div className='App'>
        <header className='App-header'>
          {/* <h1>Sign Up</h1>
        <h3>There's no charge upon registration</h3> */}
          <Grid align='center'>
            <h1>Sign In</h1>
            <h5>There's no charge upon registration</h5>
          </Grid>
          <Grid align='center'>
            {loginData ? (
              <div>history.push('/');</div>
            ) : (
              <GoogleLogin
                clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                buttonText='Log in with Google'
                onSuccess={handleLogin}
                onFailure={handleFailure}
                cookiePolicy={'single_host_origin'}
              ></GoogleLogin>
            )}
          </Grid>
        </header>
      </div>
    </Paper>
  );
}

export default App;
