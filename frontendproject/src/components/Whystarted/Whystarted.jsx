import '../../assets/sass/whystarted.scss';
import whystarted from '../../assets/img/whystarted.jpg'
import Btn from '../Btn/Btn'
   
function Whystarted() => {
       
    return (
        <div className="whystarted-container">
            <div className="whystarted-img">
                <img src={whystarted} alt="Why We Started">
            </div>
            <div className="whystarted-txt">
                <p className="whystarted-cap">Why we started</p>
                <h1>It started out as a simple idea and evolved into our passion</h1>
                <p> Lorem </p>
                <Btn value="Discover our story &gt;" />
            </div>
        </div>
    );
}

export default Whystarted;