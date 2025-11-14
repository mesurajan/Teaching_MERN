import React from 'react'
import {Link,NavLink} from 'react-router-dom'
function Header() {
  return (
<div className='bg-blue-500'>
  <nav className=' flex flex-col md:flex-row items-center justify-between bg-blue-500'>
    <ul className='flex '>
    <li>
      <NavLink>Home</NavLink>
    </li>
    <li>
      <NavLink>Menu</NavLink>
    </li>
    <li>
      <NavLink>About US</NavLink>
    </li>
     <li>
      <NavLink>Contact US</NavLink>
    </li>
    </ul>
  </nav>
</div>

   
  )
}

export default Header
