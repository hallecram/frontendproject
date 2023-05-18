import '../../assets/sass/tabs.scss';
import { useState } from react;
import Btn from '../Btn/Btn'
   
function Tabs() => {
       
    return (
        <div className="tabs-container">
            <div>
                <div className="tab1"></div>
                <div className="tab2"></div>
                <div className="tab3"></div>
            </div>
            <div className="tabs-output">
        </div>
    );
}

export default Tabs;