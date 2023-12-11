import React, { useState } from 'react';
import { Typography ,Grid} from '@mui/material';
import Card from '../components/Card';
import {Link} from 'react-router-dom'
function Tests({icons}) {

  return (
    <>
        <Grid container justifyContent={'center'} spacing={{ xs: 2, md: 3 }} >
        {icons.map((iconData,index) => (
          
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Link to={{pathname:new URL(`${window.location.pathname}/${iconData.name}`, window.location.href).pathname}}>
            <Card data = {iconData}></Card>
            </Link>
        </Grid>
        
        ))}
        </Grid>
    </>
  )
}

export default Tests