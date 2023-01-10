import '../css/navbar.css';

import React from 'react'
import trollface from '../images/Troll Face.png';
export const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={trollface} alt="" className='face'/>
        <h2 className='heading'>Meme Generator</h2>
    </div>
  )
}
