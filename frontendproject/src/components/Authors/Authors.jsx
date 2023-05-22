import './Authors.scss';
import { useState } from 'react';
import AutData from './AutData';
import Social from '../Social/Social'
   
const Authors = (props) => {
    const {authors} = props;

    const [currentIndex, setCurrentIndex] = useState(0);
    const [length, setLength] = useState(authors.length);

    useEffect(() => {
        setLength(authors.length)
    }, [authors])

    //callback functions para as setas
    const nextCard = ()=>{
        if(currentIndex < (length - 1)){
            setCurrentIndex(prevState => prevState + 1)
        }
    };
    const prevCard = ()=>{
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1)
        }
    };

    return(
        <div className="aut-container">
            <div className="aut-title">
                <h2>Authors</h2>
            </div>
            <div className="aut-wrapper">
                <div className="box-wrapper">
                    <div
                    className="aut-box"
                    style={{transform: `translateX(-${currentIndex * 100}%)`}}>
                        {authors}
                    </div>
                </div>
            </div>
            <div className="arrows">
                <button id="prevBtn" onClick={prevCard} className="Prev">Prev</button>
                <button id="nextBtn" onClick={nextCard} className="Next">Next</button>
            </div>
        </div>  
    )
}


    /*
    //callback functions para as setas
    const nextCard = ()=>{
        setCurrent(current === length - 1 ? 0 : current + 1)
    };
    const prevCard = ()=>{
        setCurrent(current === 0 ? length - 1 : current - 1)
    };
    
  

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
*/


export default Authors