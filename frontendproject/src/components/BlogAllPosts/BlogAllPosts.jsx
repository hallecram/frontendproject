import { useState } from "react";
import { Link } from "react-router-dom";
import PostData from "../../assets/data/PostData";

import './BlogAllPosts.scss';
   
function BlogAllPosts({posts}){

    //useState para o renderizar novamente a lista
    //const [data, setData] = useState([]);

    //useState para o fetch
    //const [loading, setLoading] = useState(false);

    //useState para a pagination
    const [currentPage, setCurrentPage] = useState(1);
    //useState para nr posts por página
    const [postsPerPage, setPostsPerPage] = useState(5);

    const [pageNumberLimit, setPageNumberLimit] = useState(5);
    const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
    const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

    //se o array não for o PostData ou se array não tiver valores
    if (!Array.isArray(posts) || posts.length <= 0){
        return null;
    }

    //get current posts
    const indexLastPost = currentPage * postsPerPage;
    const indexFirstPost = indexLastPost - postsPerPage;
    //const currentPosts = posts.slice(indexFirstPost, indexLastPost); --> usar quando houver fetch
    

    //map para o conteudo do array
    const PostList = 
        PostData.slice(indexFirstPost, indexLastPost).map((postElem) => {
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
        setCurrentPage(currentPage + 1);
        if(currentPage + 1 > maxPageNumberLimit){
            setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
            setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
        }
    };
    const handlePrevBtn = () => {
        setCurrentPage(currentPage - 1);
        if((currentPage - 1) % pageNumberLimit === 0){
            setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
            setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
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
                    className={currentPage === number ? "active" : null}
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
                <ul>
                    <li>
                        <button onClick={handlePrevBtn}>Prev</button>
                    </li>
                    {Pagination}
                    <li>
                        <button onClick={handleNextBtn}>Next</button>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default BlogAllPosts;