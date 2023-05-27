import BlogAllPosts from "../components/BlogAllPosts/BlogAllPosts";
import BlogFtPost from "../components/BlogFtPost/BlogFtPost";
import Carousel from "../components/Carousel/Carousel";
import Join from "../components/Join/Join";

import CatData from "../components/Carousel/CatData";

const Blog = () => {
    return(
        <div>
            <section>
                <BlogFtPost />
            </section>
            <section>
                <BlogAllPosts />
            </section>
            <section>
                <Carousel categories={CatData} />
            </section>
            <section>
                <Join />
            </section>
        </div>
    )
};

export default Blog;