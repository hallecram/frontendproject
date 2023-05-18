import '../../assets/sass/allposts.scss';
import PostList from './PostList';
   
const Allposts = () => {

    const PostList =
        {
          id: 1,
          src: "../../assets/img/img01.jpg",
          description: "Slider 01",
          postedOn: "Travel",
          title: "Where to Work in Berlin: Cafes & Coworking",
          author: "Floyd Miles",
          date: "November 15, 2022",
          caption:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, ut! Libero, perferendis aspernatur aliquam quibusdam totam sed.",
        };
    
    return (
        <div className="allposts-container">
            <div className="allposts-title">
                <h2>All Posts</h2>
                <a href="/blog">View All</a>
            </div>
            <div className="allposts-box">
                <div className="post-caption">
                    <p className="ftpost-label">By <span>{PostList.author}</span> | {PostList.date}</p>
                    <h3>{PostList.title}</h3>
                </div>
                <div className="post-caption">
                    <p className="ftpost-label">By <span>{PostList.author}</span> | {PostList.date}</p>
                    <h3>{PostList.title}</h3>
                </div>
                <div className="post-caption">
                    <p className="ftpost-label">By <span>{PostList.author}</span> | {PostList.date}</p>
                    <h3>{PostList.title}</h3>
                </div>
                <div className="post-caption">
                    <p className="ftpost-label">By <span>{PostList.author}</span> | {PostList.date}</p>
                    <h3>{PostList.title}</h3>
                </div>
                <div className="post-caption">
                    <p className="ftpost-label">By <span>{PostList.author}</span> | {PostList.date}</p>
                    <h3>{PostList.title}</h3>
                </div>
                <div className="post-caption">
                    <p className="ftpost-label">By <span>{PostList.author}</span> | {PostList.date}</p>
                    <h3>{PostList.title}</h3>
                </div>
      
            </div>
        </div>
        
    );
}

export default Allposts;