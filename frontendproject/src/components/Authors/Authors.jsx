import { useState } from 'react';
import Social from '../Social/Social'

import './Authors.scss';
   
const Authors = ({authors}) => {
    
    //useState para o carousel
    const [currentCard, setCurrentCard] = useState(3);

    //callback functions para as setas
    const nextCard = ()=>{
        if(currentCard === (authors.length - 1)){
            return
        }
        else{
            setCurrentCard(currentCard => currentCard + 1)
        }
    };
    const prevCard = ()=>{
        if (currentCard === 3) {
            return
        }
        else{
            setCurrentCard(currentCard => currentCard - 1)
        }
    };

    //se o array não for o DataLoader ou se array não tiver valores
    if (!Array.isArray(authors) || authors.length <= 0){
        return null;
    }

    //map para o conteudo do array
    const AuthorList = authors.map((element, index) => {
        const {photo, authorName, job} = element;

        return(
            <div 
                className={ currentCard === index || currentCard === index + 1 || currentCard === index + 2 || currentCard === index + 3 ? 'aut-box' : 'aut-box hidden' }
                key={index}
            >
                <div className="txt-wrapper" >
                <img src={photo} alt={authorName} />
                <h3>{authorName}</h3>
                <p>{job}</p> 
                </div>
                <Social />
            </div>
        )
    })   

    return(
        <div className="aut-container">
            <div className="aut-title">
                <h2>Authors</h2>
            </div>
            <div className="aut-wrapper">
                <div className="box-wrapper">
                        {AuthorList}
                </div>
                {/* SETAS */}
                <div className="aut-arrows">
                    <div className="arrows-wrapper">
                        <div className="prev">
                            <img src="../../assets/img/arrow.svg" className="prev-arrow" alt="prevArrow" onClick={prevCard}/>
                        </div>
                        <div className="next">
                            <img src="../../assets/img/arrow.svg" className="next-arrow" alt="nextArrow" onClick={nextCard}/>
                        </div>
                    </div>
                </div>
            </div>            
        </div>  
    )
}

export default Authors