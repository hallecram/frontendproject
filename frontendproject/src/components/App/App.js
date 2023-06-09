import { Routes, Route } from "react-router-dom";

import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Home from '../../pages/Home';
import Blog from '../../pages/Blog';
import Aboutus from '../../pages/Aboutus';
import ContactUs from '../../pages/ContactUs';
import Privpolice from "../../pages/Privpolice";
import BlogPost from "../../pages/BlogPost";

import PostData from "../../assets/data/PostData";

import './App.scss';

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
            {PostData.map((postElem, id) => {
              const { postId,
                      imgAuthor,
                      altImgAuthor,
                      author,
                      date,
                      postTitle,
                      imgCategory,
                      altImgCategory,
                      category,
                      imgPost,
                      altImgPost,
                      postSubtitle1,
                      postSubtitle2,
                      postSubtitle3,
                      postBody,
                      postLi1,
                      postLi2,
                      postLi3
                    } = postElem;
              const postLink = `/blog/${postId}`;
              return(
                <Route path={postLink} key={postId} exact element={
                  <BlogPost 
                    postLink = {{postLink}}
                    imgAuthor = {imgAuthor}
                    altImgAuthor = {altImgAuthor}
                    author = {author}
                    date = {date}
                    postTitle = {postTitle}
                    imgCategory = {imgCategory}
                    altImgCategory = {altImgCategory}
                    category = {category}
                    imgPost = {imgPost}
                    altImgPost = {altImgPost}
                    postSubtitle1 = {postSubtitle1}
                    postSubtitle2 = {postSubtitle2}
                    postSubtitle3 = {postSubtitle3}
                    postBody = {postBody}
                    postLi1 = {postLi1}
                    postLi2 = {postLi2}
                    postLi3 = {postLi3}
                  />
                }
                />
              )
            })}
          </Routes>        
      </div>
      <div id="Footer" className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;