import React from 'react'
import { Outlet, Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <ul>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/library'}>Library</Link> </li>
      </ul>
    </div>
  )
}

export default Header
