import { Paper ,Typography} from '@mui/material'
import React from 'react'
import { useNavigate} from 'react-router-dom'



function subscribeCard() {
    const navigator = useNavigate();
    const handleYes = ()=>{
        navigator('/SignUp');
    }
    const handleNo = ()=>{
        navigator('/');
    }
  return (
    <Paper sx={{padding:'1rem' , margin:'1rem'}}>
        <Typography>Are you interested in monitering your progress? </Typography>
        <button onClick ={handleYes} >Yes</button>
        <button onClick = {handleNo} >No</button>
    </Paper>
  )
}

export default subscribeCard