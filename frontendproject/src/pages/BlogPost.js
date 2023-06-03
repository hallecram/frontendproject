import Join from "../components/Join/Join";
import ReadNext from "../components/ReadNext/ReadNext";
import Post from "../components/Post/Post";

import PostData from "../assets/data/PostData";

import '../assets/sass/main.scss'

const BlogPost = () => {
    return (
        <div>
            <section className="post-section">
                {PostData.map((postElement, id) => {
                    return(
                        <Post
                            posts={PostData}
                            key={id} 
                            postId = {postElement.postId}
                            author = {postElement.author}
                            imgAuthor = {postElement.imgAuthor}
                            altImgAuthor = {postElement.altImgAuthor}
                            date = {postElement.date}
                            postTitle = {postElement.postTitle}
                            imgCategory= {postElement.imgCategory}
                            altImgCatergory = {postElement.altImgCategory}
                            category = {postElement.category}
                            imgPost = {postElement.imgPost}
                            altImgPost = {postElement.altImgPost}
                            postSubtitle1 = {postElement.postSubtitle1}
                            postSubtitle2 = {postElement.postSubtitle2}
                            postSubtitle3 = {postElement.postSubtitle3}
                            postBody = {postElement.postBody}
                            postLi1 = {postElement.postLi1}
                            postLi2 = {postElement.postLi2}
                            postLi3 = {postElement.postLi3}
                        />
                    );
                })}
                
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