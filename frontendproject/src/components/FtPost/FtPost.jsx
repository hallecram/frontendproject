import { useState } from 'react';
import { Link } from 'react-router-dom';
import './FtPost.scss';
import Btn from '../Btn/Btn';
import React from 'react';
   
const Ftpost = ({posts}) => {

    const randomIdx = Math.floor(Math.random() * posts.length);
    const [currentPost, setCurrentPost] = useState(randomIdx);

    const FtPost = 
        posts.map((postElem, postId) => {
            return(
                <div key={postId}>
                    {postId === currentPost &&
                    <div className="ftpost-box">
                        <div className="ftpost-img">
                            <img src={postElem.imgPost} alt={postElem.altImgPost} />
                        </div>
                        <p className="ftpost-label">By <span>{postElem.author}</span> | {postElem.date}</p>
                        <h3>{postElem.postTitle}</h3>
                        <p>{postElem.postCaption}</p>
                        <div className="btn-wrapper">
                            <Link to={`/blog/${postElem.postId}`}>
                                <Btn value="Read more &gt;" color="btn" />
                            </Link>
                        </div>
                    </div>
                    }
                </div>
            )
        });
    
    return (
        <div className="ftpost-container">
            <h2>Featured Post</h2>
            {FtPost}
        </div>
        
    );
}

export default Ftpost;