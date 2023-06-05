import Post from "../components/Post/Post";
import Join from "../components/Join/Join";
import ReadNext from "../components/ReadNext/ReadNext";
import PostData from "../assets/data/PostData";

import '../assets/sass/main.scss'

const BlogPost = (props) => {

    return (
        <div>
            <section className="post-section">
               <Post 
                    key = {props.key}
                    postLink = {props.postLink}
                    imgAuthor = {props.imgAuthor}
                    altImgAuthor = {props.altImgAuthor}
                    author = {props.author}
                    date = {props.date}
                    postTitle = {props.postTitle}
                    imgCategory = {props.imgCategory}
                    altImgCategory = {props.altImgCategory}
                    category = {props.category}
                    imgPost = {props.imgPost}
                    altImgPost = {props.altImgPost}
                    postSubtitle1 = {props.postSubtitle1}
                    postSubtitle2 = {props.postSubtitle2}
                    postSubtitle3 = {props.postSubtitle3}
                    postBody = {props.postBody}
                    postLi1 = {props.postLi1}
                    postLi2 = {props.postLi2}
                    postLi3 = {props.postLi3}/>
            </section>
            <section className="readnext-section">
                <ReadNext />
            </section>
            <hr />
            <section className="join-section">
                <Join />
            </section>
        </div>
    )
};

export default BlogPost;



//backup
// {PostData.map((postElement, postId) => {
//     return (
//         <div className="post-container" key={postId}>
//             <section className="post-section">
//                 <Post 
//                     imgAuthor={postElement.imgAuthor}
//                     altImgAuthor={postElement.altImgAuthor}
//                     author={postElement.author}
//                     date={postElement.date}
//                     postTitle={postElement.postTitle}
//                     imgCategory={postElement.imgCategory}
//                     altImgCategory={postElement.altImgCategory}
//                     category={postElement.category}
//                     imgPost={postElement.imgPost}
//                     altImgPost={postElement.altImgPost}
//                     postSubtitle1={postElement.postSubtitle1}
//                     postSubtitle2={postElement.postSubtitle2}
//                     postSubtitle3={postElement.postSubtitle3}
//                     postBody={postElement.postBody}
//                     postLi1={postElement.postLi1}
//                     postLi2={postElement.postLi2}
//                     postLi3={postElement.postLi3}
//                 />                
//             </section>
//         </div>
//     )
// })}