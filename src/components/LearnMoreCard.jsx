import React from 'react'
import { Paper,Avatar} from '@mui/material'
import anxiety from '../assets/anxiety.jpg'
function LearnMoreCard() {
  return (
   <>
   <Paper elevation={4} sx={{width:'250px',height:'300px'}}>
    <div style={{height:'40%'}}><Avatar>{anxiety}</Avatar></div>
    <div ></div>
   </Paper>
   </>
  )
}

export default LearnMoreCard