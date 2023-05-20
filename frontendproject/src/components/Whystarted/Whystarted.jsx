import '../../assets/sass/whystarted.scss';
import whystarted from '../../assets/img/whystarted.png'
import Btn from '../Btn/Btn'
   
const Whystarted = () => {
    return (
        <div className="whystarted-container">
            <div className="whystarted-img">
                <img src={whystarted} alt="Why We Started"></img>
            </div>
            <div className="whystarted-txt">
                <div className="txt-wrapper">
                <p className="whystarted-cap">Why we started</p>
                <h1>It started out as a simple idea and evolved into our passion</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit necessitatibus totam tempora deleniti magni animi veritatis nobis rerum, provident laborum voluptates ratione in corrupti, aperiam eligendi rem dignissimos.</p>
                <Btn value="Discover our story &gt;" />
                </div>
            </div>
        </div>
    );
}

export default Whystarted;