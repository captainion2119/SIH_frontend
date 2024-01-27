import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Grid, Menu, MenuItem, Button, Typography,Box } from '@mui/material';
import logo from '../assets/swas.png'
function Navbar({ data }) {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuClick = (path) => {
    handleClose();
    navigate(path);
  };

  return (
    <>
      <Grid container alignItems={'center'} justifyContent={'space-between'} px={3}  sx={{ position: 'sticky', top: '0', zIndex: '100' }}>
        
          <Grid item sx={{color:'black',mixBlendMode:'difference'}} >
          <NavLink to={'/'}
  style={{
    fontFamily: 'Swasti',
    fontSize: '28px',
    textDecoration:'none',
    color:'black'
  }}
>
  Svasthyam
</NavLink>

          <Typography variant='body2'sx={{fontSize:'14px'}}>Because every mind matters...</Typography>
          </Grid>
      
        <Grid item xs>
          <Grid container spacing={2} justifyContent={'flex-end'} >
          <Grid item>
            <NavLink to={'/tests'} style={{ color: 'inherit', textDecoration: 'none' }}>
              <Typography variant='body1'>Tests</Typography>
            </NavLink>
          </Grid>
          <Grid item>
            <Typography
              variant='body1'
              aria-controls="learn-more-menu"
              aria-haspopup="true"
              onClick={handleClick}
              sx={{ color: 'inherit', textDecoration: 'none', cursor: 'pointer' }}
            >
              Learn More
            </Typography>

            <Menu
              id="learn-more-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
              sx={{
                '& .MuiPaper-root': {
                  backgroundColor: 'rgba(150, 155, 200, 0.1) !important',
                  backdropFilter: 'blur(5px) !important',
                  boxShadow: 'none !important',
                },
              }}
            >
              {data.map((menuItem, index) => (
                <MenuItem key={index} onClick={() => handleMenuClick(`/details/${menuItem}`)}>
                  {menuItem.charAt(0).toUpperCase()+menuItem.replace('_',' ').slice(1)}
                </MenuItem>
              ))}
            </Menu>
          </Grid>
          <Grid item>
            <NavLink to={'/aboutUs'} style={{ color: 'inherit', textDecoration: 'none' }}>
              <Typography variant='body1'>About us</Typography>
            </NavLink>
          </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Navbar;
