import '../../assets/sass/slider.scss';
import react, {useState} from 'react';
import Img01 from '../../assets/img/img01.png' 
import Btn from '../Btn/Btn';

const Slider = ({slides})=>{
    const [currentImg, setCurrentImg] = useState(0);

    //const nextImg = (eventArgs)=>{
    //let idBtn = eventArgs.target.id;
            
    return(
        <div className="imgslider-container">
            <div className="slider">
                <div className="slider-img">
                    <div className="slider-txt">
                        <h6>POSTED ON <span>STARTUP</span></h6>
                        <h2 className="display-txt">Step-by-step guide to choosing great font pairs</h2>
                        <p>By <span>James West</span> | May 23, 2022</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum necessitatibus ratione asperiores debitis molestias, obcaecati fugit beatae inventore ab eum culpa vero sapiente id, sint adipisci veritatis maxime reiciendis iste?</p>
                        <Btn value="Read more &gt;"></Btn>
                    </div>

                </div>
            </div>
            <input type="button" value="prev" id="prevBtn"></input>
            <input type="button" value="next" id="nextBtn"></input>         
        </div>
    );
}

export default Slider;