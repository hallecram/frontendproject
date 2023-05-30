import Btn from '../Btn/Btn';
import './Join.scss'

function Join(){
    return(
        <div className="join-container">
            <div className="join-txt-wrapper">
                <h2>Join our team to be a part of story</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt voluptate nesciunt facere veniam.</p>
                <Btn value="Join Now" color="btn"></Btn>
            </div>
        </div>
    );
}

export default Join;