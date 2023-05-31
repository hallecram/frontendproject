import './Testimonials.scss';
import { useState } from 'react';
import TestData from './TestData';

function Testimonials({tests}){

    //useState para o slider
    const [currentTest, setCurrentTest] = useState(0);
    const length = tests.length;

    //callback functions para as setas
    const nextTest = ()=>{
        setCurrentTest(currentTest === length - 1 ? 0 : currentTest + 1)
    };
    const prevTest = ()=>{
        setCurrentTest(currentTest === 0 ? length - 1 : currentTest - 1)
    };

    return(
        <div className="test-container">
            <div className="test-wrapper">
                {/* DIV MAIS À ESQ */}
                <div className="test-txt">
                        <p className="test-cap">Testimonials</p>
                        <h2>What people say about our blog</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>

                {/* VERTICAL LINE */}
                <div className="test-hr">
                    <hr></hr>
                </div>

                {/* OUTPUT */}
                <div className="output-container">
                    {TestData.map((testElement, index) => {
                        return(
                            <div
                                className={index === currentTest ? "current-test active" : "current-test hidden"}
                                key={index}
                            >
                                {index === currentTest && 
                                    <div className="test-output">
                                        <div className="cap-wrapper">
                                            <h4>{testElement.cap}</h4>
                                        </div>
                                        <div className="author-wrapper">
                                            <div className="img-wrapper">
                                                <img src={testElement.photo} className="img-test" alt={testElement.description}/>
                                            </div>
                                            <div className="author-test">
                                                <h4>{testElement.author}</h4>
                                                <p>{testElement.location}</p>
                                            </div>
                                        </div>
                                    </div>}
                            </div>
                        )
                    })}
                </div>
            </div>
            {/* SETAS */}
            <div className="test-arrows">
                <div className="arrows-wrapper">
                    <div className="prev">
                        <img src="../../assets/img/arrow.svg" className="prev-arrow" alt="prevArrow" onClick={prevTest}/>
                    </div>
                    <div className="next">
                        <img src="../../assets/img/arrow.svg" className="next-arrow" alt="nextArrow" onClick={nextTest}/>
                    </div>
                </div>
            </div>
            
            
            
        </div>
    );
}

export default Testimonials