import React from 'react'
import logo from '../assets/swas.png'
function Footer() {
  return (
    <div style={{ backgroundColor:'rgba(174, 193, 210, .9)',backdropFilter:'blur(10px)',width:'100%',paddingLeft:'1.5rem',marginTop:'2rem'}}>
    <img src={logo} alt="logo" width={'70px'} height={'70px'} />
  </div>
  )
}

export default Footer