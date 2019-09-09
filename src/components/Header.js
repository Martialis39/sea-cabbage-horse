import React from 'react'
import logo from '../assets/logo.svg'

function Header(){
  return <header style={{backgroundColor: '#000', boxShadow: '0px 4px 5px 0px rgba(0,0,0,0.3)'}}>
      <img style={{width: '173px'}} src={logo} alt="Pipedrive" />
  </header>
}

export default Header