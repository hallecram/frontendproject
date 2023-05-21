import './Social.scss';
import fbIcon from '../../assets/img/fb.png';
import twitterIcon from '../../assets/img/twitter.png';
import instaIcon from '../../assets/img/insta.png';
import linkedinIcon from '../../assets/img/linkedin.png';

function Social(){
    return(
        <div className="social">
            <img src={fbIcon} alt='Facebook Icon'></img>
            <img src={twitterIcon} alt='Twitter Icon'></img>
            <img src={instaIcon} alt='Instagram Icon'></img>
            <img src={linkedinIcon} alt='LinkedIn Icon'></img>
        </div>
    )
}

export default Social