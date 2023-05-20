import '../../assets/sass/tabs.scss';
import { useState } from 'react';   
   
const Tabs = () => {  

//useState para o slider
const [current, setCurrent] = useState(0);
//const length = slides.length;

    return (
        <div className="tabs-container">
            <div className="tabs">
                <div className="tab1"></div>
                <div className="tab2"></div>
                <div className="tab3"></div>
            </div>
            <div className="tabs-output"></div>
        </div>
    );
}

export default Tabs;