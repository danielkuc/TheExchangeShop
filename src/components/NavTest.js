import React from 'react'
import { NavLink } from 'react-router-dom'

const NavTest = () => {
  return (
    <div>
      <nav>
        <NavLink to="profile">
          Profile
        </NavLink>
      </nav>
    </div>
  )
}

export default NavTest