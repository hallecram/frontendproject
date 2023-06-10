import { useState } from 'react';
import { Link } from "react-router-dom";
import Btn from '../Btn/Btn';

import './Slider.scss';

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
    if (!Array.isArray(slides) || slides.length <= 0){
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
                        {slides.map((slideElem, index) => {
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
                {slides.map((slideElem, postId) => {
                    return (
                        <div
                            className={postId === currentSlide ? "current-slide active" : "current-slide"}
                            key={postId}
                        >
                            {postId === currentSlide && <img src={slideElem.imgPost} className="img-slider" alt={slideElem.altImgPost}/>}
                            <div className="img-gradient"></div>
                            <div className="txt-container">
                            {postId === currentSlide && 
                                <div className="txt-slider"> 
                                    <div className="txt-wrapper">
                                        <h6>Posted on <span>{slideElem.category}</span></h6>
                                        <h2 className="display-txt">{slideElem.postTitle}</h2>
                                        <p>By <span>{slideElem.author}</span> | {slideElem.date}</p>
                                        <p className="slider-caption">{slideElem.postCaption}</p>
                                    </div>
                                    <div className="slider-btn-wrapper">
                                        <Link to={`/blog/${slideElem.postId}`}>
                                            <Btn value="Read more &gt;" color="btn" />
                                        </Link>
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