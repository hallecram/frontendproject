import {Link} from "react-router-dom";
import logo from '../../assets/img/logo.png';
import Social from "../Social/Social";
import Btn from '../Btn/Btn';
import './Footer.scss'

function Footer(){
    return(
        <div className="footer-container">
            <div className="footer">
                <div className="logo">
                    <img src={logo} alt='Finsweet Logo'></img>
                </div>
                <div className="nav">
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
                    </ul>
                </div>
            </div>
            <div className="subs-box">
                <div className="subs-txt">
                    <h2>Subscribe to our newsletter to get the latest updates and news</h2>
                </div>
                <div className="subs-form">
                    <input className="dark-input" placeholder="Enter Your Email"></input>
                    <Btn value="Subscribe" color="btn"></Btn>
                </div>                   
            </div>
            <div className="footer">
                <div>
                    <p>Finstreet 118 2561 Fintown</p>
                    <p>Hello@finsweet.com 020 7993 2905</p>
                </div>
                <div className="social-wrapper">
                    <Social />
                </div>
            </div>
        </div>
    );
}

export default Footer;