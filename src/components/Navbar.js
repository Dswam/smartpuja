import React from 'react'
import { NavLink } from 'react-router-dom'
import "../csscomponent/navbar.css";
import logo from "../image/favicon.ico"



const Navbar = () => {
    const [click, setClick] = React.useState(false);
    const handleClick = () => setClick(!click);
    const Close = () => setClick(false);
    return (
        <div>
            <div className={click ? "main-container" : ""} onClick={() => Close()} />
            <nav className="navbar" onClick={e => e.stopPropagation()}>
                <div className="nav-container">
                    <NavLink to="/" className="nav-logo">
                        <img src={logo} alt="" />
                    </NavLink>
                    <input className="form-control nav-items-form" type="search" placeholder="Search" aria-label="Search" />
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <NavLink
                                to="/"
                                activeClassName="active"
                                className="nav-links"
                                onClick={click ? handleClick : null}
                            >
                                Puja Services
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink

                                to="/about"
                                activeClassName="active"
                                className="nav-links"
                                onClick={click ? handleClick : null}
                            >
                                E-puja<span>NEW</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink

                                to="/benefits"
                                activeClassName="active"
                                className="nav-links"
                                onClick={click ? handleClick : null}
                            >
                                Astrology
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink

                                to="/contact"
                                activeClassName="active"
                                className="nav-links"
                                onClick={click ? handleClick : null}
                            >
                                Events
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink

                                to="/contact"
                                activeClassName="active"
                                className="nav-links"
                                onClick={click ? handleClick : null}
                            >
                                Blog
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink

                                to="/contact"
                                activeClassName="active"
                                className="nav-links"
                                onClick={click ? handleClick : null}
                            >
                                Enquiry
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink

                                to="/contact"
                                activeClassName="active"
                                className="nav-links"
                                onClick={click ? handleClick : null}
                            >
                                search
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink

                                to="/contact"
                                activeClassName="active"
                                className="nav-links"
                                onClick={click ? handleClick : null}
                            >
                                call
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink

                                to="/contact"
                                activeClassName="active"
                                className="nav-links"
                                onClick={click ? handleClick : null}
                            >
                                whatsapp
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink

                                to="/contact"
                                activeClassName="active"
                                className="nav-links"
                                onClick={click ? handleClick : null}
                            >
                                sign in
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink

                                to="/contact"
                                activeClassName="active"
                                className="nav-links"
                                onClick={click ? handleClick : null}
                            >
                                cart
                            </NavLink>
                        </li>
                    </ul>
                    <div className="nav-icon" onClick={handleClick}>
                        <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
                    </div>
                </div>
            </nav>
        </ div>
    );
}

export default Navbar