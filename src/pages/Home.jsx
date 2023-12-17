import React, { lazy, Suspense } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { NavLink } from 'react-router-dom';
const LearnMoreCard = lazy(() => import('../components/LearnMoreCard'));
const Footer = lazy(() => import('../components/Footer'));

const HomeSection = ({ title, subTitle, to }) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly', height: '100%' }}>
    <Typography variant='h4' textAlign='center'>{title}</Typography>
    <Typography variant='h6' textAlign='center'>{subTitle}</Typography>
    <NavLink to={to}><Button>Take the test</Button></NavLink>
  </div>
);

const Home = ({ data }) => (
  <Suspense fallback={<div>Loading...</div>}>
    <div style={{ display: 'flex', justifyContent: 'center', height: '70vh', width: '100%', margin: 'auto', padding: '1rem' }}>
      <HomeSection title='Take a Mental Health Test' subTitle='Mental health conditions, such as depression or anxiety, are real, common and treatable. And recovery is possible.' to='/tests' />
    </div>
    <Stack sx={{ marginTop: '8rem', width: '100%' }}>
      <Typography variant='h4' textAlign='center' mb='8rem' id='learn-more'>Learn more about mental health</Typography>
      <Stack spacing='3rem'>
        {data.map((item,index) => (
          <LearnMoreCard key={item.name} data={item} alignSelf={index%2 == 0 ? 'flex-start' : 'flex-end'} />
        ))}
      </Stack>
      <Footer />
    </Stack>
  </Suspense>
);

export default Home;