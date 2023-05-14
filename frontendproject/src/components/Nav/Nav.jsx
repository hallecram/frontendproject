import logo from '../../assets/img/logo.png'
import Btn from '../Btn/Btn';
import '../../assets/sass/nav.css'

function Nav(){
    return(
        <div className="header">
            <div className="logo">
                <img src={logo} alt='Finsweet Logo'></img>
            </div>
            <div className="nav">
                <ul>
                    <li>Home</li>
                    <li>Blog</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li><Btn value="Subscribe"></Btn></li>
                </ul>
                
            </div>
        </div>
    );
}

export default Nav;