import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

function Card({ icon, name }) {

  return (
    <Stack alignItems={'center'} justifyContent={'center'} >
      <Box sx={{ height: '270px',width:'240px' ,overflow: 'hidden',backgroundImage:`url(${icon})`,borderRadius:'.8rem',backgroundSize:'cover',backgroundPosition:'center','&:hover': { transform: 'scale(1.02)' }
}}>
      </Box>
      <Box>
        <Typography variant='h6' sx={{ color:'black',textDecoration:'inherit',fontWeight:'bold'}}>{name.charAt(0).toUpperCase()+ name.slice(1).replace('_',' ')}</Typography>
      </Box>
    </Stack>
  );
}

export default Card;
