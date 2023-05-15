import { Routes, Route } from "react-router-dom";
import '../../assets/sass/main.scss';
import Nav from '../Nav/Nav';
import Join from '../Join/Join';
import Footer from '../Footer/Footer';
import Home from '../../pages/Home';
import Blog from '../../pages/Blog';
import Aboutus from '../../pages/Aboutus';
import Contact from '../../pages/Contact';
import Privpolice from "../../pages/Privpolice";

function App() {
  return (
    <div>
      <Nav />
      <br></br>
      <div>
           <Routes>
            <Route path="/" element={<Home />} />
            <Route path="blog" element={<Blog />} />
            <Route path="aboutus" element={<Aboutus />} />
            <Route path="contact" element={<Contact />} />
            <Route path="police" element={<Privpolice />} />
          </Routes>
      </div>
      <br></br>
      <Join />
      <Footer />
    </div>
  );
}

export default App;
