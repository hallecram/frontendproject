import './Post.scss'

const Post = (props) => {
    return (
        <div>
            <div className="post-container">
                    <div className="post-author-wrapper">
                        <div className="img-wrapper">
                            <img src={props.imgAuthor} alt={props.altImgAuthor} />
                        </div>
                        <div className="txt-wrapper">
                            <h3>{props.author}</h3>
                            <p>Posted on {props.date}</p>
                        </div>
                    </div>
                    <div className="post-title-wrapper">
                        <h1>{props.postTitle}</h1>
                        <div className="post-cat-wrapper">
                            <img className="post-img" src={props.imgCategory} alt={props.altImgCategory}/>
                            <h4>{props.category}</h4>
                        </div>
                    </div>
                    <div className="post-img-wrapper">
                        <img src={props.imgPost} alt={props.altImgPost} />
                    </div>
                    <section className="post-body">
                        <article>
                            <h2>{props.postSubtitle1}</h2>
                            <p>
                                {props.postBody}  
                            </p>
                        </article>
                        <article>
                            <h2>{props.postSubtitle2}</h2>
                            <p>
                                {props.postBody}
                            </p>
                            <p>
                                {props.postBody}
                            </p>
                            <ul>
                                <li>
                                    <h4>
                                        {props.postLi1}
                                    </h4>
                                </li>
                                <li>
                                    <h4>
                                        {props.postLi2}
                                    </h4>
                                </li>
                                <li>
                                    <h4>
                                        {props.postLi3}
                                    </h4>
                                </li>
                            </ul>
                        </article>
                        <article>
                            <h2>{props.postSubtitle3}</h2>
                            <p>
                                {props.postBody}
                            </p>
                        </article>
                    </section>
                </div>
        </div>
    )
};

export default Post;