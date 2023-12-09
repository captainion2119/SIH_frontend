import React from 'react'
import { NavLink } from 'react-router-dom';
import { Grid} from '@mui/material';
function Navbar() {
  const styles=({isActive})=> {
    return {color: isActive? 'blue':'inherit',textDecoration:'none'
  }
  }
  return (
    <>
      <Grid container justifyContent={'space-between'} px={1.5} my={2}>
        <Grid item><NavLink to={'/'} style={styles}>LOGO</NavLink></Grid>
        <Grid item container xs spacing={2.5} justifyContent={'flex-end'}>
          <Grid item>
            <NavLink to={'/tests'} style={styles}>
                Tests
            </NavLink>
          </Grid>
          <Grid item>
            <NavLink to={'/learnMore'} style={styles}>
              Learn More
            </NavLink>
          </Grid>
          <Grid item>
            <NavLink to={'/aboutUs'} style={styles}>
              About us
            </NavLink>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default Navbar