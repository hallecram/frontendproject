import { Link } from 'react-router-dom';

import './AllPosts.scss';
import PostData from '../../assets/data/PostData';
   
const Allposts = () => {

    //map para o conteudo do array
    const PostList = 
        PostData.map((postElem) => {
        const {postId,author,date,postTitle} = postElem;
        return(
            <div key={postId}>
                <Link to={`/blog/${postId}`}>
                    <div className="post-caption">
                        <p className="ftpost-label">By <span>{author}</span> | {date}</p>
                        <h3>{postTitle}</h3>
                    </div>
                </Link>
            </div>
        )})

    return (
        <div className="allposts-container">
            <div className="allposts-title">
                <h2>All Posts</h2>
                <Link to="/blog" className="link-color">View All</Link>
            </div>
            <div className="allposts-box">
                {PostList}
            </div>
        </div>
    );
}

export default Allposts;