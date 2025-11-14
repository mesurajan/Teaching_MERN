import React from 'react'

function Header() {
  return (
    <div className="flex flex-row justify-between items-center p-4">
        
      <div>
        <p className="text-xl font-semibold">Mr Beans Cafeday</p>
      </div>

      <nav>
        <ul className="flex gap-6">
          <li>Home</li>
          <li>Menu</li>
          <li>About us</li>
          <li>Contact Us</li>
        </ul>
      </nav>

      <div className="flex gap-3">
        <button>Sign up</button>
        <button>Sign in</button>
      </div>

    </div>
  )
}

export default Header
