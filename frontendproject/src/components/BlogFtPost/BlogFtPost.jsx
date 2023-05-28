import './BlogFtPost.scss';
import Btn from '../Btn/Btn';
   
const BlogFtPost = () => {
    const ftPostData = {
        id: 1,
        src: '../assets/img/ftpost01.png',
        description: 'Featured Post',
        postedOn: 'Travel',
        title: '15 Ways to Work Overseas',
        author: 'John Doe',
        date: 'April 30, 2023',
        caption: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, ut! Libero, perferendis aspernatur aliquam quibusdam totam sed.'
    };
    
    return (
        <div className="blogftpost-container">
            <div className="txt-wrapper">
                <div>
                    <p className="cap">Featured Post</p>
                    <h2>{ftPostData.title}</h2>
                    <p className="blogftpost-label">By <span>{ftPostData.author}</span> | {ftPostData.date}</p>
                    <p>{ftPostData.caption}</p>
                </div>
                <div className="btn-wrapper">
                    <Btn value="Read more &gt;" color="btn" />
                </div>
            </div>
            <div className="img-wrapper">
                <img src={ftPostData.src} />
            </div>
        </div>
        
    );
}

export default BlogFtPost;