import React from 'react'
import { Link } from 'react-router'

const Header = () => {
  return (
  <>
 <nav>
    <ul>
        <li>Home</li>
        <Link to={"/login"}>
        <li style={{ textDecoration: "none" }}>Login</li>
        </Link>
        <li>Contact</li>
    </ul>
        
 </nav>

  </>
  )
}

export default Header