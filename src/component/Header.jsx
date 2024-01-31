import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import '../Style/header.css'
import logo_light from '../image/logo.png'
import logo_dark from '../image/logo_dark.png'
function Header() {
    let route = useLocation()
    return (
        <header className={route.pathname === "/" || route.pathname === "/collection" ? "header" : "header_dark"}>
            <div className="container">
                <div className="header_wrapper">
                    <div className="header_left">
                        <ul className='header_list'>
                            <li >
                                <NavLink to="/collection">Collection</NavLink>
                            </li>
                            <li>
                                <NavLink >About</NavLink>
                            </li>
                            <li>
                                <NavLink to="/pdp">PDP</NavLink>
                            </li>
                        </ul>
                    </div>
                    <NavLink to="/">
                        {route.pathname === "/" ? <img src={logo_light} alt="logo" /> : <img src={logo_dark} alt="" /> &&
                            route.pathname === "/collection" ? <img src={logo_light} alt="logo" /> : <img src={logo_dark} alt="" />
                        }
                    </NavLink>
                    <div className="header_right">
                        <ul className='header_list'>shop
                            <li>
                                <NavLink>Account</NavLink>
                            </li>
                            <li>
                                <NavLink>Search</NavLink>
                            </li>
                            <li>
                                <NavLink to="/card">Cart(0)</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header