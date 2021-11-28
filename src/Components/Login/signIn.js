import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import App from './index';

const SignInOutContainer = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const paperStyle = { width: 360, margin: '30px auto' };
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role='tabpanel'
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={5}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  return (
    <Paper elevation={100} style={paperStyle}>
      <Tabs
        value={value}
        indicatorColor='primary'
        textColor='primary'
        onChange={handleChange}
        aria-label='disabled tabs example'
      >
        <Tab label='Student' />

        <Tab label='Professional' />
      </Tabs>
      <TabPanel value={value} index={0}>
        <App handleChange={handleChange} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <App />
      </TabPanel>
    </Paper>
  );
};

export default SignInOutContainer;
