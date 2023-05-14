import '../../assets/sass/general.css'

function Nav(){
    return(
        <div className="nav">
            <div className="logo"><h1>&#123;Finsweet</h1></div>
            <div>
                <ul>
                    <li>Home</li>
                    <li>Blog</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li><button className="subs-btn">Subscribe</button></li>
                </ul>
                
            </div>
        </div>
    );
}

export default Nav;