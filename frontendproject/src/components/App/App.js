import { Routes, Route } from "react-router-dom";
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Home from '../../pages/Home';
import Blog from '../../pages/Blog';
import Aboutus from '../../pages/Aboutus';
import ContactUs from '../../pages/ContactUs';
import Privpolice from "../../pages/Privpolice";
import BlogPost from "../../pages/BlogPost";

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
            <Route path="about" element={<Aboutus />} />
            <Route path="contact" element={<ContactUs />} />
            <Route path="police" element={<Privpolice />} />
            <Route path="post" element={<BlogPost />} />
          </Routes>
      </div>
      <div id="Footer" className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
