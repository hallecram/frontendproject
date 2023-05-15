import {Link} from "react-router-dom";
import logo from '../../assets/img/logo.png'
import Btn from '../Btn/Btn';
import '../../assets/sass/nav.scss'

function Nav(){
    return(
        <div className="header">
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
                    <li><Btn value="Subscribe"></Btn></li>
                </ul>
            </nav>
        </div>
    );
}

export default Nav;