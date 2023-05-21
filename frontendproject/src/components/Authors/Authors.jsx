import './Authors.scss';
import { useState } from 'react';
import AutData from './AutData';
import Social from '../Social/Social'
   
function Authors({authors}){

    //useState
    const [current, setCurrent] = useState(0);
    const length = authors.length;

    //how many I wanna see?
    //const show = 4;

    //se o array não for o SliderData ou se array não tiver valores
    if (!Array.isArray(AutData) || authors.length <= 0){
        return null;
    }

    //callback functions para as setas
    const nextCard = ()=>{
        setCurrent(current === length - 1 ? 0 : current + 1)
    };
    const prevCard = ()=>{
        setCurrent(current === 0 ? length - 1 : current - 1)
    };
    
    /*
    const Author = ({id, photo, name, job}) => 
        <div className="aut-box">
            <div className="txt-wrapper" key={id}>
            <img src={photo} alt={`photo of ${name}`} />
            <h3>{name}</h3>
            <p>{job}</p> 
            </div>
            <Social />
        </div>

    const AuthorList = AutData.map((currentAuthor, index) => {
        return(
            <div className={index === current ? "currentAuthor active" : "currentAuthor"}
                key={index}>
                {index === current &&
                    <div className="aut-box" key={currentAuthor.index}>
                        <div className="txt-wrapper" >
                        <img src={currentAuthor.photo} alt={`photo of ${currentAuthor.name}`} />
                        <h3>{currentAuthor.name}</h3>
                        <p>{currentAuthor.job}</p> 
                        </div>
                        <Social />
                    </div>
                }
            </div>
        )
    })
    */

    const AuthorList = AutData.map((element) => {
        const {id, photo, authorName, job} = element;

        return(
            <div className="aut-box" key={id}>
                <div className="txt-wrapper" >
                <img src={photo} alt={`photo of ${authorName}`} />
                <h3>{authorName}</h3>
                <p>{job}</p> 
                </div>
                <Social />
            </div>
        )
    })
        
        

    return (
        <div className="aut-container">
            <div className="aut-title">
                <h2>Authors</h2>
            </div>
            <div className="box-wrapper">
                {AuthorList}
            </div>
            <div className="arrows">
                <button id="prevBtn" onClick={prevCard}>Prev</button>
                <button id="nextBtn" onClick={nextCard}>Next</button>
            </div>
        </div>
    );
}


export default Authors