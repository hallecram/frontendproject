import Slider from "../components/Slider/Slider";
import FtPost from "../components/FtPost/FtPost";
import AllPosts from "../components/Allposts/AllPosts";
import Tabs from "../components/Tabs/Tabs";
import SpecialPost from "../components/SpecialPost/SpecialPost";
import Carousel from "../components/Carousel/Carousel";
import Authors from "../components/Authors/Authors";
import Logo from "../components/Logo/Logo";
import Testimonials from "../components/Testimonials/Testimonials";
import Join from "../components/Join/Join";

import MobileAuthors from "../components/MobileAuthors/MobileAuthors";
import MobileCarousel from "../components/MobileCarousel/MobileCarousel";

import SliderData from "../components/Slider/SliderData";
import TestData from "../assets/data/TestData";
import CatData from "../components/Carousel/CatData";
import AutData from "../components/Authors/AutData";

import '../assets/sass/main.scss'

const Home = () => {

    return (
        <div>
            <section className="slider-section">
                <Slider slides={SliderData}/>
            </section>
            <section className="posts-section">
                <FtPost /><AllPosts />
            </section>
            <section className="tabs-section" id="Tabs">
                <Tabs />
            </section>
            <section className="carousel-section">
                <Carousel categories={CatData} />
            </section>
            <section className="mobile-carousel-section">
                <MobileCarousel categories={CatData} />
            </section>
            <section className="sp-section">
                <SpecialPost />
            </section>
            <section className="authors-section">
                <Authors authors={AutData} />
            </section>
            <section className="mobile-authors-section">
                <MobileAuthors authors={AutData} />
            </section>
            <section className="logo-section">
                <Logo />
            </section>
            <section className="test-section">
                <Testimonials tests={TestData} />
            </section>
            <section className="join-section">
                <Join />
            </section>
        </div>
    )
};

export default Home;