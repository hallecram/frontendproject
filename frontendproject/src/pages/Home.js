import Slider from "../components/Slider/Slider";
import SliderData from "../components/Slider/SliderData";
import FtPost from "../components/FtPost/FtPost";
import AllPosts from "../components/Allposts/AllPosts";
import Tabs from "../components/Tabs/Tabs";
import SpecialPost from "../components/SpecialPost/SpecialPost";
import '../assets/sass/main.scss'
import Carousel from "../components/Carousel/Carousel";
import Authors from "../components/Authors/Authors";
import Logo from "../components/Logo/Logo";
import Testimonials from "../components/Testimonials/Testimonials";
import TestData from "../components/Testimonials/TestData";
import CatData from "../components/Carousel/CatData";
import AutData from "../components/Authors/AutData";

const Home = () => {
    return (
        <div className="master-wrapper">
            <section className="slider-section">
                <Slider slides={SliderData}/>
            </section>
            <section className="posts-section">
                <FtPost /><AllPosts />
            </section>
            <section className="tabs-section">
                <Tabs />
            </section>
            <section className="carousel-section">
                <Carousel categories={CatData} />
            </section>
            <section className="sp-section">
                <SpecialPost />
            </section>
            <section className="authors-section">
                <Authors authors={AutData}/>
            </section>
            <section className="logo-section">
                <Logo />
            </section>
            <section className="test-section">
                <Testimonials tests={TestData} />
            </section>
        </div>
        
    )
};

export default Home;