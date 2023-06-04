import { useState } from 'react';
import PostData from "../../assets/data/PostData";

import './BlogAllPosts.scss';
   
const BlogAllPosts = ({posts}) => {

    //useState para o renderizar novamente a lista
    const [currentList, setCurrentList] = useState();
    //const length = {posts}.length;

    //callback functions para as setas
    const nextPage = ()=>{
        if(currentList === (posts.length - 5)){
            return
        }
        else{
            setCurrentList(currentList => currentList + 5)
        }
    };
    const prevPage = ()=>{
        if (currentList === 5) {
            return
        }
        else{
            setCurrentList(currentList => currentList - 5)
        }
    };

    //se o array não for o DataLoader ou se array não tiver valores
    if (!Array.isArray(PostData) || posts.length <= 0){
        return null;
    }


    //map para o conteudo do array
    const PostList = PostData.slice(0,5).map((postElem, index) => {
        const {imgPost,altImgPost,category,postTitle,postCaption} = postElem;

        return(
            <div 
                className="post-caption" 
                key={index}
            >
                <div className="img-wrapper">
                    <img src={imgPost} alt={altImgPost}/> 
                </div>
                <div className="txt-wrapper">
                    <p className="cat-cap">{category}</p>
                    <h2>{postTitle}</h2>
                    <p>{postCaption}</p>
                </div>
            </div>
        )
    })
  
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
                <p onClick={prevPage}>Prev</p>
                <p onClick={nextPage}>Next</p>
            </div>
            
        </div>
        
    );
}

export default BlogAllPosts;