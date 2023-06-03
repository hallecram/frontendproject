import PostData from '../../assets/data/PostData';

import './Post.scss'

const Post = ({posts}) => {

    //se o array não for o PostData ou se array não tiver valores
    if (!Array.isArray(PostData) || posts.length <= 0){
        return null;
    }

    return (
        <div>
        	{PostData.map((postElement, postIndex) => {
                return (
                    <div className="post-container" key={postIndex}>
                        <div className="post-author-wrapper">
                            <div className="img-wrapper">
                                <img src={postElement.imgAuthor} alt={postElement.altImgAuthor} />
                            </div>
                            <div className="txt-wrapper">
                                <h3>{postElement.author}</h3>
                                <p>Posted on {postElement.date}</p>
                            </div>
                        </div>
                        <div className="post-title-wrapper">
                            <h1>{postElement.postTitle}</h1>
                            <div className="post-cat-wrapper">
                                <img className="post-img" src={postElement.imgCategory} alt={postElement.altImgCategory}/>
                                <h4>{postElement.category}</h4>
                            </div>
                        </div>
                        <div className="post-img-wrapper">
                            <img src={postElement.imgPost} alt={postElement.altImgPost} />
                        </div>
                        <section className="post-body">
                            <article>
                                <h2>{postElement.postSubtitle1}</h2>
                                <p>
                                    {postElement.postBody}  
                                </p>
                            </article>
                            <article>
                                <h2>{postElement.postSubtitle2}</h2>
                                <p>
                                    {postElement.postBody}
                                </p>
                                <p>
                                    {postElement.postBody}
                                </p>
                                <ul>
                                    <li>
                                        <h4>
                                            {postElement.postLi1}
                                        </h4>
                                    </li>
                                    <li>
                                        <h4>
                                            {postElement.postLi2}
                                        </h4>
                                    </li>
                                    <li>
                                        <h4>
                                            {postElement.postLi3}
                                        </h4>
                                    </li>
                                </ul>
                            </article>
                            <article>
                                <h2>{postElement.postSubtitle3}</h2>
                                <p>
                                    {postElement.postBody}
                                </p>
                            </article>
                        </section>
                    </div>
                )
            })}
        </div>
    )
};

export default Post;