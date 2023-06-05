import './Carousel.scss';
import { useState } from 'react';
import CatData from './CatData';

function Carousel({categories}){
    
    //useState para o slider
    const [currentCard, setCurrentCard] = useState(3);
    //const length = categories.length;

    //callback functions para as setas
    const nextCard = ()=>{
        if(currentCard === (categories.length - 1)){
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
    if (!Array.isArray(CatData) || categories.length <= 0){
        return null;
    }

    //map para o conteudo do array
    const CatList = CatData.map((element, index) => {
        const {photo, catName, caption} = element;

        return(
            <div 
                className={ currentCard === index || currentCard === index + 1 || currentCard === index + 2 || currentCard === index + 3 ? 'carousel-box' : 'carousel-box hidden' }
                key={index}
            >
                <div className="txt-wrapper">
                    <div className="img-wrapper">
                        <img src={photo} alt={`${catName}'s pic`}/>
                    </div>
                    <h3>{catName}</h3>
                    <p>{caption}</p> 
                </div>
            </div>
        )
    })  

    return (
        <div className="carousel-container">
            <div className="carousel-title">
                <h2>Choose a Category</h2>
            </div>
            <div className="cat-wrapper">
                <div className="box-wrapper">
                    {CatList}
                </div>
                {/* SETAS */}
                <div className="cat-arrows">
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
    );
}


export default Carousel;