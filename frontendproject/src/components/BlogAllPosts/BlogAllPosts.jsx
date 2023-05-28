import './BlogAllPosts.scss';
import AllPostsData from './AllPostsData';
   
const BlogAllPosts = () => {

    const AllPostsData =
        {
          id: 1,
          src: "../../assets/img/post-img01.png",
          description: "Slider 01",
          category: "Travel",
          title: "8 Figma design systems that you can download for free today",
          author: "Floyd Miles",
          date: "November 15, 2022",
          caption:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, ut! Libero, perferendis aspernatur aliquam quibusdam totam sed.",
        };
    
    return (
        <div className="blog-allposts-container">
            <div className="blog-allposts-title">
                <h2>All Posts</h2>
            </div>
            <hr></hr>
            <div className="blog-allposts-box">
                <div className="post-caption">
                    <div className="img-wrapper">
                        <img src={AllPostsData.src} /> 
                    </div>
                    <div className="txt-wrapper">
                        <p className="cat-cap">{AllPostsData.category}</p>
                        <h2>{AllPostsData.title}</h2>
                        <p>{AllPostsData.caption}</p>
                    </div>
                </div>
                <div className="post-caption">
                    <div className="img-wrapper">
                        <img src={AllPostsData.src} /> 
                    </div>
                    <div className="txt-wrapper">
                        <p className="cat-cap">{AllPostsData.category}</p>
                        <h2>{AllPostsData.title}</h2>
                        <p>{AllPostsData.caption}</p>
                    </div>
                </div>
                <div className="post-caption">
                    <div className="img-wrapper">
                        <img src={AllPostsData.src} /> 
                    </div>
                    <div className="txt-wrapper">
                        <p className="cat-cap">{AllPostsData.category}</p>
                        <h2>{AllPostsData.title}</h2>
                        <p>{AllPostsData.caption}</p>
                    </div>
                </div>
                <div className="post-caption">
                    <div className="img-wrapper">
                        <img src={AllPostsData.src} /> 
                    </div>
                    <div className="txt-wrapper">
                        <p className="cat-cap">{AllPostsData.category}</p>
                        <h2>{AllPostsData.title}</h2>
                        <p>{AllPostsData.caption}</p>
                    </div>
                </div>
                <div className="post-caption">
                    <div className="img-wrapper">
                        <img src={AllPostsData.src} /> 
                    </div>
                    <div className="txt-wrapper">
                        <p className="cat-cap">{AllPostsData.category}</p>
                        <h2>{AllPostsData.title}</h2>
                        <p>{AllPostsData.caption}</p>
                    </div>
                </div>
                <div className="post-caption">
                    <div className="img-wrapper">
                        <img src={AllPostsData.src} /> 
                    </div>
                    <div className="txt-wrapper">
                        <p className="cat-cap">{AllPostsData.category}</p>
                        <h2>{AllPostsData.title}</h2>
                        <p>{AllPostsData.caption}</p>
                    </div>
                </div>
                <div className="post-caption">
                    <div className="img-wrapper">
                        <img src={AllPostsData.src} /> 
                    </div>
                    <div className="txt-wrapper">
                        <p className="cat-cap">{AllPostsData.category}</p>
                        <h2>{AllPostsData.title}</h2>
                        <p>{AllPostsData.caption}</p>
                    </div>
                </div>
                <div className="post-caption">
                    <div className="img-wrapper">
                        <img src={AllPostsData.src} /> 
                    </div>
                    <div className="txt-wrapper">
                        <p className="cat-cap">{AllPostsData.category}</p>
                        <h2>{AllPostsData.title}</h2>
                        <p>{AllPostsData.caption}</p>
                    </div>
                </div>
                <div className="post-caption">
                    <div className="img-wrapper">
                        <img src={AllPostsData.src} /> 
                    </div>
                    <div className="txt-wrapper">
                        <p className="cat-cap">{AllPostsData.category}</p>
                        <h2>{AllPostsData.title}</h2>
                        <p>{AllPostsData.caption}</p>
                    </div>
                </div>
                <div className="post-caption">
                    <div className="img-wrapper">
                        <img src={AllPostsData.src} /> 
                    </div>
                    <div className="txt-wrapper">
                        <p className="cat-cap">{AllPostsData.category}</p>
                        <h2>{AllPostsData.title}</h2>
                        <p>{AllPostsData.caption}</p>
                    </div>
                </div>
                
            </div>
            
        </div>
        
    );
}

export default BlogAllPosts;