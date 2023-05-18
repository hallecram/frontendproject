import Slider from "../components/Slider/Slider";
import DataLoader from "../components/Slider/DataLoader";
import Ftpost from "../components/Ftpost/Ftpost";
import Allposts from "../components/Allposts/Allposts";
import Tabs from "../components/Tabs/Tabs";
import Whystarted from "../components/Whystarted/Whystarted";
import '../assets/sass/main.scss'

const Home = () => {
    return (
        <div>
            <section className="slider-section">
                <Slider slides={DataLoader}/>
            </section>
            <section className="posts-section">
                <Ftpost /><Allposts />
            </section>
            <section className="tabs-section">
                <Tabs />
            </section>

            {/* carousel-section */}

            <section className="whystarted-section">
                <Whystarted />
            </section>
        </div>
        
    )
};

export default Home;