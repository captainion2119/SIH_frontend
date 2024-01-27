import React from 'react';
import { Paper, Avatar, Typography ,Stack,Grid,useMediaQuery} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

// Inside your component

function LearnMoreCard({data,alignSelf}) {
  const name = data.name.split('_').join(' ');
  const navigate = useNavigate();
  const theme = useTheme();
const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid  flexDirection= 'row' sx={{alignSelf: smallScreen? 'center':alignSelf,}} onClick={()=>{navigate(`/details/${data.name}`)}}>
    <Paper elevation={4} sx={{ width: '280px',  padding: '1rem',cursor:'pointer','&:hover':{boxShadow:'0 0 25px rgba(0, 0, 0,0.3)'},borderRadius:'.8rem',margin:'1.5rem' }}>
     <Stack alignItems={'center'} spacing={'1rem'}>
        <Avatar src={data.icon} sx={{ width: '5rem', height: '5rem'}} />
      <Typography variant='h5'>{name.charAt(0).toUpperCase()+name.slice(1)}</Typography>
      <Typography variant="h6" align='center' sx={{display: '-webkit-box',
          WebkitBoxOrient: 'vertical', overflow: 'hidden', textOverflow: 'ellipsis',WebkitLineClamp: '4'}}>
      {data.detail}</Typography>
      </Stack>
    </Paper>
    </Grid>
  );
}

export default LearnMoreCard;