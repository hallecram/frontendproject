import '../../assets/sass/allposts.scss';
   
function Allposts() => {
    
    return (
        <div className="allposts-container">
            <div className="allposts-title">
                <h2>Featured Post</h2>
                <a href="/blog">View All</a>
            </div>
            <div className="allposts-box">
                <div className="post-caption">
                    <p className="ftpost-label">By <span>{ftPostData.author}</span> | {ftPostData.date}</p>
                    <h3>{ftPostData.title}</h3>
                </div>
                <div className="post-caption">
                    <p className="ftpost-label">By <span>{ftPostData.author}</span> | {ftPostData.date}</p>
                    <h3>{ftPostData.title}</h3>
                </div>
                <div className="post-caption">
                    <p className="ftpost-label">By <span>{ftPostData.author}</span> | {ftPostData.date}</p>
                    <h3>{ftPostData.title}</h3>
                </div>
                <div className="post-caption">
                    <p className="ftpost-label">By <span>{ftPostData.author}</span> | {ftPostData.date}</p>
                    <h3>{ftPostData.title}</h3>
                </div>
                <div className="post-caption">
                    <p className="ftpost-label">By <span>{ftPostData.author}</span> | {ftPostData.date}</p>
                    <h3>{ftPostData.title}</h3>
                </div>
                <div className="post-caption">
                    <p className="ftpost-label">By <span>{ftPostData.author}</span> | {ftPostData.date}</p>
                    <h3>{ftPostData.title}</h3>
                </div>
            </div>
        </div>
        
    );
}

export default Allposts;