import React, { lazy, Suspense } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box'
import { NavLink } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import  useMediaQuery from '@mui/material/useMediaQuery'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
const LearnMoreCard = lazy(() => import('../components/LearnMoreCard'));
const Footer = lazy(() => import('../components/Footer'));

import blob from '../assets/blob.png'

const HomeSection = ({ title, subTitle, to }) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' ,gap:'2rem'}}>
    <Typography variant='h4' textAlign='center'>{title}</Typography>
    <Typography variant='h6' textAlign='center'>{subTitle}</Typography>
    <NavLink to={to}><Button variant='contained' sx={{width:'12rem',height:'3rem',borderRadius:'1.5rem'}}>Take the test</Button></NavLink>
  </div>
);

const Home = ({ data }) => {
  const theme = useTheme();
const smallScreen = useMediaQuery(theme.breakpoints.down("md"));
return(
  <Suspense fallback={<div>Loading...</div>}>
    <Box
  sx={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: smallScreen ? '95vh' : '90vh',
    width: '90%',
    margin: 'auto',
    padding: '1rem',
    
      // You can adjust this based on your needs
  }}
>
  <HomeSection title='Take a Mental Health Test' subTitle='Mental health conditions, such as depression or anxiety, are real, common and treatable. And recovery is possible.' to='/tests' />
  <Typography align='center' variant='body1'>
    <div>What are these </div>
    <div><span style={{ whiteSpace: 'nowrap' }}>Mental Disorders</span></div>
    <Button disableRipple endIcon={<KeyboardDoubleArrowDownIcon />} />
  </Typography>
</Box>

    <Stack sx={{ marginTop: '8rem', width: '100%' }}>
      <Typography variant='h4' textAlign='center' mb='8rem' id='learn-more'>Learn more about mental health</Typography>
      <Stack spacing='3rem'>
        {data.map((item,index) => (
          <LearnMoreCard key={item.name} data={item} alignSelf={index%2 == 0 ? 'flex-start' : 'flex-end'} />
        ))}
      </Stack>
      <Footer />
    </Stack>
  </Suspense>);
};

export default Home;