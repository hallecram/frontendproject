import Slider from "../components/Slider/Slider";
import DataLoader from "../components/Slider/DataLoader";

const Home = () => {
    return (
        <div>
            <Slider slides={DataLoader}/>
        </div>
    )
};

export default Home;