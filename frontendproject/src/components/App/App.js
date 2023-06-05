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
            {PostData.map((postElem, postId) => {
              const postLink = `/blog/${postId}`;
              return(
                <Route path={postLink} key={postId} exact element={
                  <BlogPost 
                    key={postId}
                    postLink = {{postLink}}
                    imgAuthor = {postElem.imgAuthor}
                    altImgAuthor = {postElem.altImgAuthor}
                    author = {postElem.author}
                    date = {postElem.date}
                    postTitle = {postElem.postTitle}
                    imgCategory = {postElem.imgCategory}
                    altImgCategory = {postElem.altImgCategory}
                    category = {postElem.category}
                    imgPost = {postElem.imgPost}
                    altImgPost = {postElem.altImgPost}
                    postSubtitle1 = {postElem.postSubtitle1}
                    postSubtitle2 = {postElem.postSubtitle2}
                    postSubtitle3 = {postElem.postSubtitle3}
                    postBody = {postElem.postBody}
                    postLi1 = {postElem.postLi1}
                    postLi2 = {postElem.postLi2}
                    postLi3 = {postElem.postLi3}
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



//BACKUP
{/* <>
{ PostData.map((postElement, postId) => {
  const linkTo = `/blog/post${postId}`;

  return(
    <Route key={postId} path={linkTo} exact element={
      <BlogPost 
        linkTo={{linkTo}}
        posts={PostData}
        key={postId}
      >
        <div className="post-container" key={postId}>
          <section className="post-section">
              <Post 
                  imgAuthor={postElement.imgAuthor}
                  altImgAuthor={postElement.altImgAuthor}
                  author={postElement.author}
                  date={postElement.date}
                  postTitle={postElement.postTitle}
                  imgCategory={postElement.imgCategory}
                  altImgCategory={postElement.altImgCategory}
                  category={postElement.category}
                  imgPost={postElement.imgPost}
                  altImgPost={postElement.altImgPost}
                  postSubtitle1={postElement.postSubtitle1}
                  postSubtitle2={postElement.postSubtitle2}
                  postSubtitle3={postElement.postSubtitle3}
                  postBody={postElement.postBody}
                  postLi1={postElement.postLi1}
                  postLi2={postElement.postLi2}
                  postLi3={postElement.postLi3}
              />                
          </section>
        </div>
      </BlogPost>
    } />
  )
})}
</> */}