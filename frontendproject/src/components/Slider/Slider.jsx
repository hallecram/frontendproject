import './Slider.scss';
import { useState } from 'react';
import { Link } from "react-router-dom";
import SliderData from '../../assets/data/SliderData';
import Btn from '../Btn/Btn';

const Slider = ({slides})=>{

    //useState para o slider
    const [currentSlide, setCurrentSlide] = useState(0);
    const length = slides.length;

    //callback functions para as setas
    const nextSlide = () => {
        setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1)
    };
    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1)
    };

    const goToSlide = (index) => {
       setCurrentSlide(index);
    };


    //se o array não for o SliderData ou se array não tiver valores
    if (!Array.isArray(SliderData) || slides.length <= 0){
        return null;
    }
            
    return(
        <div className="imgslider-container">
            <div className="imgslider-arrows-wrapper">
                <div className="imgslider-arrows">
                    <div className="prev">
                        <img src="../../assets/img/arrowslider.svg" className="prev-arrow" alt="prevArrow" onClick={prevSlide}/>
                    </div>
                    <div className="imgslider-dots">
                        {SliderData.map((slideElement, index) => {
                            return(
                                <div key={index} className={index === currentSlide ? "dots-active" : "dots"} onClick={() => goToSlide(index)}>
                                    &#11044;
                                </div>
                            )
                        })}
                    </div>
                    <div className="next">
                        <img src="../../assets/img/arrowslider.svg" className="next-arrow" alt="nextArrow" onClick={nextSlide}/>
                    </div>
                </div>
            </div>
            <div>
                {SliderData.map((slideElement, index) => {
                    return (
                        <div
                            className={index === currentSlide ? "current-slide active" : "current-slide"}
                            key={index}
                        >
                            {index === currentSlide && <img src={slideElement.src} className="img-slider" alt={slideElement.description}/>}
                            <div className="img-gradient"></div>
                            <div className="txt-container">
                            {index === currentSlide && 
                                <div className="txt-slider"> 
                                    <div className="txt-wrapper">
                                        <h6>Posted on <span>{slideElement.postedOn}</span></h6>
                                        <h2 className="display-txt">{slideElement.title}</h2>
                                        <p>By <span>{slideElement.author}</span> | {slideElement.date}</p>
                                        <p>{slideElement.caption}</p>
                                    </div>
                                    <div className="slider-btn-wrapper">
                                        <Link to="/post01"><Btn value="Read more &gt;" color="btn" /></Link>
                                    </div>
                                </div>}
                            </div>
                        </div>
                    );
                })}
            </div>     
        </div>
    );
}

export default Slider;