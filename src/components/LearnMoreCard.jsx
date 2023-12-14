import React from 'react';
import { Paper, Avatar, Typography ,Stack} from '@mui/material';
import { useNavigate } from 'react-router-dom';
function LearnMoreCard({data,alignSelf}) {
  const name = data.name.split('_').join(' ');
  const navigate = useNavigate();
  return (
    <Stack alignSelf={alignSelf} onClick={()=>{navigate(`/details/${data.name}`)}}>
    <Paper elevation={4} sx={{ width: '270px', height: '300px', padding: '1rem',cursor:'pointer','&:hover':{boxShadow:'0 0 25px rgba(0, 0, 0,0.4)'} }}>
     <Stack alignItems={'center'} spacing={'1rem'}>
        <Avatar src={data.icon} sx={{ width: '5rem', height: '5rem'}} />
      <Typography variant='h5'>{name}</Typography>
      <Typography variant="h6" align='center' sx={{display: '-webkit-box',
          WebkitBoxOrient: 'vertical', overflow: 'hidden', textOverflow: 'ellipsis',WebkitLineClamp: '4' }}>
      {data.detail[Object.keys(data.detail)[0]]}</Typography>
      </Stack>
    </Paper>
    </Stack>
  );
}

export default LearnMoreCard;
