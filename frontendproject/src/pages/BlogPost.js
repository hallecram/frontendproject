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
                <ReadNext data={PostData}/>
            </section>
            <section className="join-section">
                <Join />
            </section>
        </div>
    )
};

export default BlogPost;