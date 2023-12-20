import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

function Card({ icon, name }) {
  const backgroundImage = icon ? `url(${icon})` : 'none';

  return (
    <Stack alignItems={'center'} justifyContent={'center'} >
      <Box sx={{ height: '270px',width:'260px' ,overflow: 'hidden',backgroundImage:`url(${icon})`,borderRadius:'.8rem',backgroundSize:'cover',backgroundPosition:'center','&:hover': { transform: 'scale(1.02)' },
}}>
      </Box>
      <Box>
        <Typography style={{textDecoration:'none', color:'black'}}>{name}</Typography>
      </Box>
    </Stack>
  );
}

export default Card;
