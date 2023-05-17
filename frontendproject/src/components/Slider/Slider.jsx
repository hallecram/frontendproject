import '../../assets/sass/slider.scss';
import { useState } from 'react';
import DataLoader from './DataLoader';
import Btn from '../Btn/Btn';

const Slider = ({slides})=>{

    //useState para o slider
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    //callback functions para as setas
    const nextSlide = ()=>{
        setCurrent(current === length - 1 ? 0 : current + 1)
    };
    const prevSlide = ()=>{
        setCurrent(current === 0 ? length - 1 : current - 1)
    };

    //se o array não for o DataLoader ou se array não tiver valores
    if (!Array.isArray(DataLoader) || slides.length <= 0){
        return null;
    }
            
    return(
        <div className="imgslider-container">            
            <div className="prev">
                {/* img a substituir seta - prev*/}
                <input type="button" value="prev" id="prevBtn" onClick={prevSlide}></input>
            </div>
            <div className="next">
                {/* img a substituir seta - next*/}
                <input type="button" value="next" id="nextBtn" onClick={nextSlide}></input>   
            </div>
            <div>
                {DataLoader.map((currentSlide, index) => {
                    return (
                        <div
                            className={index === current ? "currentSlide active" : "currentSlide"}
                            key={index}
                        >
                            {index === current && <img src={currentSlide.src} className="img-slider" alt={currentSlide.description}/>}
                            <div className="txt-container">
                            {index === current && 
                                <div className="txt-slider"> 
                                    <h6>Posted on {currentSlide.postedOn}</h6>
                                    <h2 className="display-txt">{currentSlide.title}</h2>
                                    <p>By <span>{currentSlide.author}</span> | {currentSlide.date}</p>
                                    <p>{currentSlide.caption}</p>
                                    <Btn value="Read more &gt;" />
                                </div>}
                            </div>
                        </div>
                    );
                })};
                {/* <div>
                    <div className="txt-slider">
                        <h6>POSTED ON <span>STARTUP</span></h6>
                        <h2 className="display-txt">Step-by-step guide to choosing great font pairs</h2>
                        <p>By <span>James West</span> | May 23, 2022</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum necessitatibus ratione asperiores debitis molestias, obcaecati fugit beatae inventore ab eum culpa vero sapiente id, sint adipisci veritatis maxime reiciendis iste?</p>
                        <Btn value="Read more &gt;"></Btn>
                    </div>
                </div> */}
            </div>     
        </div>
    );
}

export default Slider;