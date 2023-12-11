// src/App.js
import React, { useState } from 'react';
import { Typography ,Stack,Button} from '@mui/material';
import { NavLink } from 'react-router-dom';
import LearnMoreCard from '../components/LearnMoreCard';
const Home= () => {
  return (
    <>
    <div style={{display:'flex',justifyContent:'center',height:'70vh',backgroundColor:'ghostwhite',width:'100%',margin:'auto',padding:'1rem'}}>
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'space-evenly',height:'100%'}}>
        <Typography variant='h4' textAlign={'center'} >Take a Mental Health Test</Typography>
        <Typography variant='h6' textAlign={'center'} >Mental health conditions, such as depression or anxiety, are real, common and treatable. And recovery is possible.</Typography>
         <NavLink to={'/tests'}><Button >Take the test</Button></NavLink>
    </div>
    </div>
    <Stack sx={{marginTop:'8rem'}}>
      <Typography variant='h4' textAlign={'center'} mb={'8rem'}>Learn more about mental health</Typography>
      <LearnMoreCard/>
    </Stack>
    </>
  );
};

export default Home;
