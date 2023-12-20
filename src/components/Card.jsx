import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

function Card({ icon,name}) {
  const backgroundImage = icon ? `url(${icon})` : 'none';
  return (
    <Stack alignItems={'center'}>
    <Box
      sx={{
        borderRadius:'.5rem',
        backgroundColor: 'rgba(128, 128, 128)',
        height: '280px',
        overflow: 'hidden',
        position: 'relative', 
        cursor:'pointer',
        margin:'1rem',
      }}
    >
      <Box
        sx={{
          backgroundImage: backgroundImage,
          backgroundSize: 'cover',
          backgroundPosition:'center',
          height: '100%',
          width: '100%',
          opacity: '0.8',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 1,
          
          '&:hover':{transform:'scale(1.02)'}
        }}
      />
      <Stack
      alignItems={'center'} justifyContent={'center'}
        sx={{
          width: '100%',
          height: '100%',
          zIndex: 2,
        }}
      >
      </Stack>
    </Box>
    <Box><Typography sx={{ zIndex: 3 ,color:'inherit',textDecoration:'none'}}>{name}</Typography></Box>
    </Stack>
  );
}

export default Card;