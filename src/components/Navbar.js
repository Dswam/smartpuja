import React from 'react'
import { NavLink } from 'react-router-dom'
import "../csscomponent/navbar.css";
import logo from "../image/favicon.ico"
import { AiOutlineSearch } from 'react-icons/ai';
import { IoCallSharp } from 'react-icons/io5';
import wp from "../image/whatsapp.png"
import cart from "../image/cart.png"
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
                                <AiOutlineSearch/>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink

                                to="/contact"
                                activeClassName="active"
                                className="nav-links"
                                onClick={click ? handleClick : null}
                            >
                             <IoCallSharp/>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink

                                to="/contact"
                                activeClassName="active"
                                className="nav-links"
                                onClick={click ? handleClick : null}
                            >
                                <img src={wp} alt="wp" style={{ height: "35px"}} />
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink

                                to="/contact"
                                activeClassName="active"
                                className="nav-links"
                                onClick={click ? handleClick : null}
                            >
                                signIn
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink

                                to="/contact"
                                activeClassName="active"
                                className="nav-links"
                                onClick={click ? handleClick : null}
                            >
                                 <img src={cart} alt="wp" style={{ height: "35px" }} /> 
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