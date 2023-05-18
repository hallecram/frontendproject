import '../../assets/sass/ftpost.scss';
import Btn from '../../components/Btn/Btn';
   
const Ftpost = () => {
    const ftPostData = {
        id: 1,
        src: '../../assets/img/ftpost01.png',
        description: 'Featured Post',
        postedOn: 'Travel',
        title: '15 Ways to Work Overseas',
        author: 'John Doe',
        date: 'April 30, 2023',
        caption: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, ut! Libero, perferendis aspernatur aliquam quibusdam totam sed.'
    };
    
    return (
        <div className="ftpost-container">
            <h2>Featured Post</h2>
            <div className="ftpost-box">
                <div className="ftpost-img"></div>
                <p className="ftpost-label">By <span>{ftPostData.author}</span> | {ftPostData.date}</p>
                <h3>{ftPostData.title}</h3>
                <p>{ftPostData.caption}</p>
                <Btn value="Read more &gt;" />
            </div>
        </div>
        
    );
}

export default Ftpost;