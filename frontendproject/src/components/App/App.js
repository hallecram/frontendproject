import { Routes, Route } from "react-router-dom";
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Home from '../../pages/Home';
import Blog from '../../pages/Blog';
import Aboutus from '../../pages/Aboutus';
import Contact from '../../pages/Contact';
import Privpolice from "../../pages/Privpolice";
import Post01 from "../../pages/Post01";

import '../../assets/sass/main.scss';

function App() {
  return (
    <div>
      <div className="header">
        <Navbar />
      </div>
      <div className="master-wrapper">
           <Routes>
            <Route path="/" element={<Home />} />
            <Route path="blog" element={<Blog />} />
            <Route path="aboutus" element={<Aboutus />} />
            <Route path="contact" element={<Contact />} />
            <Route path="police" element={<Privpolice />} />
            <Route path="post01" element={<Post01 />} />
          </Routes>
      </div>
      <div id="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
