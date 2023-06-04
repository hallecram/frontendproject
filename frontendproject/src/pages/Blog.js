import BlogAllPosts from "../components/BlogAllPosts/BlogAllPosts";
import BlogFtPost from "../components/BlogFtPost/BlogFtPost";
import Carousel from "../components/Carousel/Carousel";
import Join from "../components/Join/Join";

import CatData from "../components/Carousel/CatData";
import PostData from "../assets/data/PostData";

const Blog = () => {
    return(
        <div>
            <section>
                <BlogFtPost />
            </section>
            <section>
                <BlogAllPosts posts={PostData} />
            </section>
            <section className="carousel-section">
                <Carousel categories={CatData} />
            </section>
            <section className="join-section">
                <Join />
            </section>
        </div>
    )
};

export default Blog;