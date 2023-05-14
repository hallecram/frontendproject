import '../../assets/sass/general.css'
import Btn from '../Btn/Btn'

function Footer(){
    return(
        <div className="footer-container">
            <div className="footer">
                <div className="logo">
                    <h1>&#123;Finsweet</h1>
                </div>
                <div>
                    <ul>
                        <li>Home</li>
                        <li>Blog</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </div>
            <div className="subs-box">
                <div>
                    <h2>Subscribe to our newsletter to get the latest updates and news</h2>
                </div>
                <div>
                    <input className="dark-input" placeholder="Enter Your Email"></input>
                    <Btn value="Subscribe"></Btn>
                </div>                   
            </div>
            <div className="footer">
                <div>
                    <p>Finstreet 118 2561 Fintown</p>
                    <p>Hello@finsweet.com 020 7993 2905</p>
                </div>
                <div>
                    <p>Social Media</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;