import { Link } from 'react-router-dom';

import './ReadNext.scss'

function ReadNext({data}){

    //map para post
    const Post = 
        data.slice(0,3).map((elem) => {
            const {postId,imgPost,altImgPost,author,date,postTitle,postCaption} = elem;
            return(
                <div key={postId}>
                    <Link to={`/blog/${postId}`}>
                        <div className="post-wrapper">
                            <div className="img-wrapper">
                                <img src={imgPost} alt={altImgPost}/>
                            </div>
                            <div className="txt-wrapper">
                                <p className="label">By <span>{author}</span> | {date}</p>
                                <h3>{postTitle}</h3>
                                <p>
                                    {postCaption}
                                </p>
                            </div>
                        </div>
                    </Link>
                </div>
            )
        })
    return (
        <div className="rnext-container">
            <div className="rnext-title">
                <h2>What to read next?</h2>
            </div>
            <div className="rnext-posts-wrapper">
                {Post}
            </div>
        </div>
    )
}

export default ReadNext;