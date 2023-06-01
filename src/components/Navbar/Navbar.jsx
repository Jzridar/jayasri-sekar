import React from 'react'
import './Navbar.css'
import { Outlet, Link } from "react-router-dom";
const Navbar = () => {
    return (
        <nav>
                 <div className="nav-links">
                    <ul>
                        <li>
                        <Link>
                            <a href='/'>Home</a>
                        </Link>
                        </li>
                        <li>
                        <Link>
                            <a href='/projects'>Projects</a>
                        </Link>
                        </li>
                    </ul>
                </div>
         </nav>
    )
}

export default Navbar
