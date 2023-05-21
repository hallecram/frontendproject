import './SpecialPost.scss';
import SpImg from '../../assets/img/specialpost.png'
import Btn from '../Btn/Btn'
   
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
                    <Btn value="Discover our story &gt;" color="btn" />
                </div>
            </div>
        </div>
    );
}

export default SpecialPost;