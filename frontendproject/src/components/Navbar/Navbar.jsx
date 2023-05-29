import {Link} from "react-router-dom";
import { useState } from "react";
import logo from '../../assets/img/logo.png'
import Btn from '../Btn/Btn';


import './Navbar.scss'

function Navbar(){

    const[open, setOpen] = useState(false);
    const toggleHamburger = () => {
        setOpen(!open)
    }

    return(
        <div className="nav-container">
            <div className="logo">
                <img src={logo} alt='Finsweet Logo'></img>
            </div>
            <nav className="nav">
                <ul>
                    <li>
                        <Link to="/" className="text-link">Home</Link>
                    </li>
                    <li>
                        <Link to="/blog" className="text-link">Blog</Link>
                    </li>
                    <li>
                        <Link to="/aboutus" className="text-link">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="text-link">Contact Us</Link>
                    </li>
                    <li><a href="#Footer"><Btn value="Subscribe" color="btn-header" /></a></li>
                </ul>
            </nav>
            <div className="hamburger-toggle" onClick={toggleHamburger}>
                <div className={open ? "hamburger hamburguer-open" : "hamburger"}>
                    <div className={open ? "burger line-1" : "burger"} />
                    <div className={open ? "burger line-2" : "burger"} />
                    <div className={open ? "burger line-3" : "burger"} />
                </div>
            </div>
            <nav className={open ? "nav-overlay" : "hidden"}>
                <ul>
                    <li>
                        <Link to="/" className="text-link">Home</Link>
                    </li>
                    <li>
                        <Link to="/blog" className="text-link">Blog</Link>
                    </li>
                    <li>
                        <Link to="/aboutus" className="text-link">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="text-link">Contact Us</Link>
                    </li>
                    <li>
                        <Link to="/police" className="text-link">Privacy Policy</Link>
                    </li>
                    <li>
                        <a href="#Footer">
                            <Btn value="Subscribe" color="btn-header" />
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;