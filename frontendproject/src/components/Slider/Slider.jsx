import '../../assets/sass/slider.scss';
import react, {useState} from 'react';
import Btn from '../Btn/Btn';

const Slider = ()=>{
    const [image, setImage] = useState("");
    const nextImg = (eventArgs)=>{
    let idBtn = eventArgs.target.id;
            
    }

    return(
        <div className="slider-container">
            <div>
                <div className="slider">
                    <div className="slider-img">
                        <img src="../assets/img/img1.jpg" alt=""></img>
                    </div>
                    <div className="slider-txt">
                        <h6>POSTED ON <span>STARTUP</span></h6>
                        <p className="display-txt">Step-by-step guide to choosing great font pairs</p>
                        <p>By <span>James West</span> | May 23, 2022</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum necessitatibus ratione asperiores debitis molestias, obcaecati fugit beatae inventore ab eum culpa vero sapiente id, sint adipisci veritatis maxime reiciendis iste?</p>
                    </div>
                    <Btn value="Read more &gt;"></Btn>
                </div>
                <div className="slider hide">
                    <div className="slider-img">
                        <img src="../assets/img/img1.jpg" alt=""></img>
                    </div>
                    <div className="slider-txt">
                        <h6>POSTED ON <span>STARTUP</span></h6>
                        <p className="display-txt">Step-by-step guide to choosing great font pairs</p>
                        <p>By <span>James West</span> | May 23, 2022</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum necessitatibus ratione asperiores debitis molestias, obcaecati fugit beatae inventore ab eum culpa vero sapiente id, sint adipisci veritatis maxime reiciendis iste?</p>
                    </div>
                    <Btn value="Read more &gt;"></Btn>
                </div>
                <div className="slider hide">
                    <div className="slider-img">
                        <img src="../assets/img/img1.jpg" alt=""></img>
                    </div>
                    <div className="slider-txt">
                        <h6>POSTED ON <span>STARTUP</span></h6>
                        <p className="display-txt">Step-by-step guide to choosing great font pairs</p>
                        <p>By <span>James West</span> | May 23, 2022</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum necessitatibus ratione asperiores debitis molestias, obcaecati fugit beatae inventore ab eum culpa vero sapiente id, sint adipisci veritatis maxime reiciendis iste?</p>
                    </div>
                    <Btn value="Read more &gt;"></Btn>
                </div>
            </div>        

            <input type="button" value="prev" id="prevBtn"></input>
            <input type="button" value="next" id="nextBtn"></input>
        </div>
    );
}

export default Slider;