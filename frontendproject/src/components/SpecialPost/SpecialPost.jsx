import SpImg from '../../assets/img/specialpost.png';
import Btn from '../Btn/Btn';

import './SpecialPost.scss';
   
const SpecialPost = () => {
    return (
        <div className="sp-container">
            <div className="sp-img">
                <img src={SpImg} alt="Special Post"></img>
            </div>
            <div className="sp-txt">
                <div className="txt-wrapper">
                    <p className="sp-cap">Why we started</p>
                    <h1>It started out as a simple idea and evolved into our passion</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit necessitatibus totam tempora deleniti magni animi veritatis nobis rerum, provident laborum voluptates ratione in corrupti, aperiam eligendi rem dignissimos.</p>
                </div>
                <div className="btn-wrapper">
                    <a href="#Tabs">
                        <Btn value="Discover our story &gt;" color="btn" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default SpecialPost;