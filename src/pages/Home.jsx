// src/App.js
import React, { useState } from 'react';
import { Typography ,Stack,Button} from '@mui/material';
import { NavLink } from 'react-router-dom';
import Footer from '../components/Footer';
import LearnMoreCard from '../components/LearnMoreCard';
const Home= ({data}) => {
  return (
    <>
    <div style={{display:'flex',justifyContent:'center',height:'70vh',width:'100%',margin:'auto',padding:'1rem'}}>
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'space-evenly',height:'100%'}}>
        <Typography variant='h4' textAlign={'center'} >Take a Mental Health Test</Typography>
        <Typography variant='h6' textAlign={'center'} >Mental health conditions, such as depression or anxiety, are real, common and treatable. And recovery is possible.</Typography>
         <NavLink to={'/tests'}><Button >Take the test</Button></NavLink>
    </div>
    </div>
    <Stack sx={{marginTop:'8rem',width:'100%'}}>
      <Typography variant='h4' textAlign={'center'} mb={'8rem'} id={'learn-more'}>Learn more about mental health</Typography>
      <Stack spacing={'3rem'} >
        {
          
          data.map((item,index)=>{
            const isLeftPosition = index % 2 === 0;
            return <LearnMoreCard data={item} key={index} alignSelf={ isLeftPosition? 'flex-start':'flex-end'} />
          })
        }
      </Stack>
      <Footer/>
    </Stack>
    </>
  );
};

export default Home;
