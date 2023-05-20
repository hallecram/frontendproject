import '../../assets/sass/carousel.scss';
import { useState } from 'react';
import CatData from './CatData';
   
function Carousel(categories){
    
    //useState para o slider
    const [current, setCurrent] = useState(0);
    const length = categories.length;

    //callback functions para as setas
    const nextSlide = ()=>{
        setCurrent(current === length - 1 ? 0 : current + 1)
    };
    const prevSlide = ()=>{
        setCurrent(current === 0 ? length - 1 : current - 1)
    };

    //se o array não for o DataLoader ou se array não tiver valores
    if (!Array.isArray(CatData) || categories.length <= 0){
        return null;
    }

    return (
        <div className="carousel-container">
            <div className="carousel-title">
                <h2>Choose a Category</h2>
            </div>
            <div className="box-wrapper">

                {/*
                <div className="prev">

                    /* img a substituir seta - prev

                    <input type="button" value="prev" id="prevBtn" onClick={prevSlide}></input>
                </div>
                <div className="next">

                    /* img a substituir seta - next

                    <input type="button" value="next" id="nextBtn" onClick={nextSlide}></input>   
                </div>
                */}

                <div className="carousel-box">
                    <div className="txt-wrapper">
                        <img></img>
                        <h3></h3>
                        <p></p>
                    </div>                    
                </div>
                <div className="carousel-box">
                    <div className="txt-wrapper">
                        <img></img>
                        <h3></h3>
                        <p></p>
                    </div>  
                </div>
                <div className="carousel-box">
                    <div className="txt-wrapper">
                        <img></img>
                        <h3></h3>
                        <p></p>
                    </div>  
                </div>
                <div className="carousel-box">
                    <div className="txt-wrapper">
                        <img></img>
                        <h3></h3>
                        <p></p>
                    </div>  
                </div>
            </div>
        </div>
    );
}


export default Carousel;