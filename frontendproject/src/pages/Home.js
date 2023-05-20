import Slider from "../components/Slider/Slider";
import DataLoader from "../components/Slider/DataLoader";
import Ftpost from "../components/Ftpost/Ftpost";
import Allposts from "../components/Allposts/Allposts";
import Tabs from "../components/Tabs/Tabs";
import Whystarted from "../components/Whystarted/Whystarted";
import '../assets/sass/main.scss'
import Carousel from "../components/Carousel/Carousel";
import Authors from "../components/Authors/Authors";

const Home = () => {
    return (
        <div className="master-wrapper">
            <section className="slider-section">
                <Slider slides={DataLoader}/>
            </section>
            <section className="posts-section">
                <Ftpost /><Allposts />
            </section>
            <section className="tabs-section">
                <Tabs />
            </section>
            <section className="carousel-section">
                <Carousel />
            </section>
            <section className="whystarted-section">
                <Whystarted />
            </section>
            <section className="authors-section">
                <Authors />
            </section>
        </div>
        
    )
};

export default Home;