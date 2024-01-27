import React, { useState } from 'react';
import { Typography ,Grid} from '@mui/material';
import Card from '../components/Card';
import {NavLink} from 'react-router-dom'
function Tests({data}) {

  return (
    <>
        <Grid container justifyContent={'center'} spacing={{ xs: 2, md: 3 }} >
        {data.map((item,index) => (
          
        <Grid item xs={12} sm={6} md={4} key={index}>
          <NavLink to={{pathname:new URL(`${window.location.pathname}/${item.name}`, window.location.href).pathname}} sx={{textDecoration:'none'}}>
            <Card icon={item.icon} name={item.name}></Card>
            </NavLink>
        </Grid>
        
        ))}
        </Grid>
    </>
  )
}

export default Tests