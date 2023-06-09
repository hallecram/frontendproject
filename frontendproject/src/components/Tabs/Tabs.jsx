import './Tabs.scss';
import { useState } from 'react';   
   
const Tabs = () => {  

//useState para as tabs
const [tab, setTab] = useState("t1"); //o meu ponto zero no caso das tabs é a primeira tab estar à mostra
    const openTab = (eventArgs)=>{
        let idTab = eventArgs.target.id;
        setTab(idTab);
    }

    return (
        <div className="tabs-container">
            <div className="tabs">
                <div className="tab1" id="t1" onClick={openTab}></div>
                <div className="tab2" id="t2" onClick={openTab}></div>
                <div className="tab3" id="t3" onClick={openTab}></div>
            </div>
            <div className="tabs-output">
                {tab === "t1" && 
                    <div className="tab-wrapper">
                        <article className="article">
                            <p className="cap">About Us</p>
                            <h2>We are a community of content writers who share their learnings</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus eaque, facere explicabo iure totam ipsam earum reprehenderit voluptatem nisi.</p>
                            <a href="/about" className="link-color">Read More &gt;</a>
                        </article>
                        <article className="article">
                            <p className="cap">Our Mission</p>
                            <h3>Creating valuable content for creatives all around the world</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur expedita maxime veniam ab hic ipsum accusamus nemo provident? Cumque in at provident maiores magni architecto deserunt officia! Sed, recusandae pariatur.</p>
                        </article>
                    </div>
                }
                {tab === "t2" && 
                    <div className="tab-wrapper">
                        <article className="article">
                            <p>Tab 2 - Lorem ipsum dolor sit amet consectetur, adipisicing elit. At et consectetur officiis ullam eius molestiae in ex fugit impedit! Quia cumque, praesentium laboriosam ea est aliquid non necessitatibus vel assumenda.</p>
                        </article>
                    </div>
                }
                {tab === "t3" && 
                    <div className="tab-wrapper">
                        <article className="article">
                            <p>Tab 3 - Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus eaque, facere explicabo iure totam ipsam earum reprehenderit voluptatem nisi. Deleniti necessitatibus eum in enim ex saepe eveniet soluta molestiae voluptas!</p>
                        </article>
                    </div>
                }
            </div>
        </div>
    );
}

export default Tabs;