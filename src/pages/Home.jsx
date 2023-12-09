// src/App.js
import React, { useState } from 'react';
import { Typography ,Grid,Button} from '@mui/material';
import { NavLink } from 'react-router-dom';
const Home= () => {
  return (
    <div style={{display:'flex',justifyContent:'center',height:'70vh',backgroundColor:'brown',width:'100%',margin:'auto'}}>
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'space-evenly',height:'100%'}}>
        <Typography variant='h4' textAlign={'center'} >Take a Mental Health Test</Typography>
        <Typography variant='h6' textAlign={'center'} >Mental health conditions, such as depression or anxiety, are real, common and treatable. And recovery is possible.</Typography>
         <NavLink to={'/tests'}><Button >Take the test</Button></NavLink>
    </div>
    </div>
  );
};

export default Home;
