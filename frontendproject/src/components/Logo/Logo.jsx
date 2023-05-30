import './Logo.scss';
import Logo01 from '../../assets/img/logo01.png';
import Logo02 from '../../assets/img/logo02.png';
import Logo03 from '../../assets/img/logo03.png';
import Logo04 from '../../assets/img/logo04.png';
import Logo05 from '../../assets/img/logo05.png';

function Logo(){
    return(
        <div className="logo-container">
            <div className="logo-wrapper">
                <div className="logo-txt">
                    <p>We are</p>
                    <h4>Featured in</h4>
                </div>
                <div>
                    <img src={Logo01} alt="Logo #1"></img>
                </div>
                <div>
                    <img src={Logo02} alt="Logo #2"></img>
                </div>
                <div>
                    <img src={Logo03} alt="Logo #3"></img>
                </div>
                <div>
                    <img src={Logo04} alt="Logo #4"></img>
                </div>
                <div>
                    <img src={Logo05} alt="Logo #5"></img>
                </div>
            </div>
        </div>
    );
}

export default Logo