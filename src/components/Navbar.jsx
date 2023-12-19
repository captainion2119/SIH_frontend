import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Grid, Menu, MenuItem, Button, Typography } from '@mui/material';
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
      <Grid container alignItems={'center'} justifyContent={'space-between'} px={1.5}  sx={{ position: 'sticky', top: '0', zIndex: '100' }}>
        <Grid item>
          <NavLink to={'/'} style={{ color: 'inherit', textDecoration: 'none' }}>
            <img src={logo} alt="logo" width={'70px'} height={'70px'} />
          </NavLink>
        </Grid>
        <Grid item container xs spacing={2.5} justifyContent={'flex-end'}>
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
            >
              {data.map((menuItem, index) => (
                <MenuItem key={index} onClick={() => handleMenuClick(`/details/${menuItem}`)}>
                  {menuItem}
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
    </>
  );
}

export default Navbar;
