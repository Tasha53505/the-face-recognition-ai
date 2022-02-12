import React from 'react'
import Tilt from 'react-parallax-tilt';
import logo from'./logo.png'
import './Logo.css'

const Logo = () => {
    return (
       <div className='ma4 mt0'>
            <Tilt className= 'Tilt br2 shadow-2' style={{ height: '150px', width: '150px', }}>
           <h1 className='pa3'><img  style={{paddingTop: '5px'}}src={logo} alt='logo'/></h1>
           </Tilt>
       </div>
      
    )
}

export default Logo;