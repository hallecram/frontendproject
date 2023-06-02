import './MobileAuthors.scss';
import { useState } from 'react';
import AutData from '../../assets/data/AutData';
import Social from '../Social/Social'
   
const MobileAuthors = ({authors}) => {
    
    //useState para o carousel
    const [currentCard, setCurrentCard] = useState(1);
    //const length = authors.length;

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
    if (!Array.isArray(AutData) || authors.length <= 0){
        return null;
    }


    //map para o conteudo do array
    const AuthorList = AutData.map((element, index) => {
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
            </div>
            <div className="arrows">
                <button id="prevBtn" onClick={prevCard} className="Prev">Prev</button>
                <button id="nextBtn" onClick={nextCard} className="Next">Next</button>
            </div>
        </div>  
    )
}

export default MobileAuthors