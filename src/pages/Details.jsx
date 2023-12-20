import React from 'react';
import { Typography, Grid, List, ListItem, ListItemButton, ListItemText } from '@mui/material';

function Index({ names }) {
  return (
    <>
      <div style={{  width: '100%'}}>
        <Typography variant="h6" paddingLeft={'1rem'}>
          Content
        </Typography>
        <List>
          {names.map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton component="a" href={`#${item}`}>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </div>
    </>
  );
}

function Details({ data }) {
  const arr = Object.keys(data.detail);
  return (
    <div style={{ marginTop: '4rem', position: 'relative' }}>
    <Grid container spacing={2}>
      <Grid item container xs={12} sm={12} md={3} style={{ position: 'sticky', top: '4rem', height: '100vh' }}>
        
          <Index names={arr} />
        </Grid>
        <Grid item container xs flexDirection={'column'} spacing={'2rem'}>
          {arr.map((key, index) => (
            <Grid item id={key} xs key={index}>
              <Typography variant="h4">{key}</Typography>
              {Array.isArray(data.detail[key]) ? (
                <List>
                  {data.detail[key].map((item, subIndex) => (
                    <ListItem key={subIndex}>
                      <ListItemText primary={item} />
                    </ListItem>
                  ))}
                </List>
              ) : (
                <Typography align="justify">{data.detail[key]}</Typography>
              )}
            </Grid>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}

export default Details;
