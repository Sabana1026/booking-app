import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
const [isMobile, setIsMobile] = useState(false);

 
  return (
    <nav className='navbar'>
   <img src= "https://prnewswire2-a.akamaihd.net/p/1893751/sp/189375100/thumbnail/entry_id/0_dlxuwsl0/def_height/2700/def_width/2700/version/100012/type/1" width="200px"/>

<ul className= {isMobile ? 'nav-links-mob' : 'nav-links'} onClick={() => setIsMobile(false)}>
<Link to="/" className='movies'>
<li>Movies</li>
</Link>

<Link to="/stream" className='stream'>
<li>Stream</li>
</Link>

<Link to="/plays" className='plays'>
<li>Plays</li>
</Link>

<Link to="/sports" className='sports'>
<li>Sports</li>
</Link>


<Link to="/signup" className='signup'>
<li>SignUp</li>
</Link>
</ul>

<button className='mob-menu-icon' onClick={() => setIsMobile(!isMobile)}>
  {isMobile ? <h1>X</h1> : <h1>=</h1>}
</button>

</nav>
  )
}

export default Navbar