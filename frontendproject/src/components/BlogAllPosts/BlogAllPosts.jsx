import { useState } from "react";
import { Link } from "react-router-dom";

import './BlogAllPosts.scss';
   
function BlogAllPosts({posts}){

    //useState para o renderizar novamente a lista
    //const [data, setData] = useState([]);

    //useState para a pagination
    const [currentPage, setCurrentPage] = useState(1);

    //useState para nr posts por página
    const [postsPerPage, setPostsPerPage] = useState(5);

    const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(3);
    const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

    //se o array não for o PostData ou se array não tiver valores
    if (!Array.isArray(posts) || posts.length <= 0){
        return null;
    }

    //get current posts
    const indexLastPost = currentPage * postsPerPage;
    const indexFirstPost = indexLastPost - postsPerPage;
    

    //map para o conteudo do array
    const PostList = 
        posts.slice(indexFirstPost, indexLastPost).map((postElem) => {
        const {postId,imgPost,altImgPost,category,postTitle,postCaption} = postElem;
        return(
            <div key={postId}>
                <Link to={`/blog/${postId}`}>
                    <div className="post-caption">
                        <div className="img-wrapper">
                            <img src={imgPost} alt={altImgPost}/> 
                        </div>
                        <div className="txt-wrapper">
                            <p className="cat-cap">{category}</p>
                            <h2>{postTitle}</h2>
                            <p>{postCaption}</p>
                        </div>
                    </div>
                </Link>
            </div>
        )})

    //page numbers
    const PageNumbers = [];
    for(let i = 1; i <= Math.ceil(posts.length / postsPerPage); i++){
        PageNumbers.push(i);
    }
     
    //handle click for each page
    const handleClick = (eventArgs) => {
        setCurrentPage(Number(eventArgs.target.id));
    }

    //change page
    const handleNextBtn = () => {
        if(currentPage !== maxPageNumberLimit){
            setCurrentPage(currentPage + 1)
        }
    };
    const handlePrevBtn = () => {
        if(currentPage !== 1){
            setCurrentPage(currentPage - 1)
        }
    };

    //pagination of page numbers
    const Pagination = PageNumbers.map((number) => {
        if(number < maxPageNumberLimit + 1 && number > minPageNumberLimit){
            return(
                <li 
                    key={number} 
                    id={number}
                    onClick={handleClick}
                    className={currentPage === number ? "number active" : "number"}
                >
                    {number}
                </li>
            );
        }
        else{
            return null;
        }   
    });
 
    return (
        <div className="blog-allposts-container">
            <div className="blog-allposts-title">
                <h2>All Posts</h2>
            </div>
            <hr></hr>
            <div className="blog-allposts-box">
              {PostList}
            </div> 
            <div className="blog-allposts-pages">
                <div className="arrows-wrapper">
                    <h5 className="prev-arrow" onClick={handlePrevBtn}>
                        &lt; Prev
                    </h5>
                    <h5 className="pages">{Pagination}</h5>
                    <h5 className="next-arrow" onClick={handleNextBtn}>
                        Next &gt;
                    </h5>
                </div>
            </div>
        </div>
    );
}

export default BlogAllPosts;