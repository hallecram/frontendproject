import Join from "../components/Join/Join";
import ReadNext from "../components/ReadNext/ReadNext";
import Post from "../components/Post/Post";

import PostData from "../assets/data/PostData";

import '../assets/sass/main.scss'

const BlogPost = (props) => {
    return (
        <div>
            <section className="post-section">
                <Post />                
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