import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div>
        <nav>
            <ul className='nav-list'>
                <Link to={"/"}>
                  <li>Home</li>
                </Link>
                <Link to={"/shop"}>
                  <li>Shop</li>
                </Link>
                <Link to={"/about"}>
                  <li>About</li>
                </Link>
            </ul>
        </nav>
    </div>
  )
}

