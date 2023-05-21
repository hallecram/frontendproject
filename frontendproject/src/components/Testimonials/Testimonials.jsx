import './Testimonials.scss';
import { useState } from 'react';
import TestData from './TestData';

function Testimonials({tests}){

    //useState para o slider
    const [current, setCurrent] = useState(0);
    const length = tests.length;

    //callback functions para as setas
    const nextSlide = ()=>{
        setCurrent(current === length - 1 ? 0 : current + 1)
    };
    const prevSlide = ()=>{
        setCurrent(current === 0 ? length - 1 : current - 1)
    };

    return(
        <div className="test-container">

            {/* SETAS */}
            <div className="test-arrows">
                <div className="arrows-wrapper">
                    <div className="prev">
                        {/* img a substituir seta - prev*/}
                        <input type="button" value="prev" id="prevBtn" onClick={prevSlide}></input>
                    </div>
                    <div className="next">
                        {/* img a substituir seta - next*/}
                        <input type="button" value="next" id="nextBtn" onClick={nextSlide}></input>   
                    </div>
                </div>
            </div>

            <div className="test-wrapper">
                
                {/* DIV MAIS À ESQ */}
                <div className="test-txt">
                    <div className="txt-wrapper">
                        <p className="test-cap">Testimonials</p>
                        <h2>What people say about our blog</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>

                {/* VERTICAL LINE */}
                <div className="test-hr">
                    <hr></hr>
                </div>

                {/* OUTPUT */}
                <div className="output-container">
                    {TestData.map((currentSlide, index) => {
                        return(
                            <div
                                className={index === current ? "currentSlide active" : "currentSlide"}
                                key={index}
                            >
                                {index === current && 
                                    <div className="test-output">
                                        <div className="cap-wrapper">
                                            <h4>{currentSlide.cap}</h4>
                                        </div>
                                        <div className="author-wrapper">
                                            <div className="img-wrapper">
                                                <img src={currentSlide.photo} className="img-test" alt={currentSlide.description}/>
                                            </div>
                                            <div className="author-test">
                                                <h4>{currentSlide.author}</h4>
                                                <p>{currentSlide.location}</p>
                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>
                        )
                    })}
            </div>
            </div>
            
            
            
        </div>
    );
}

export default Testimonials