import './ReadNext.scss'

function ReadNext(){
    return (
        <div className="rnext-container">
            <div className="rnext-title">
                <h2>What to read next?</h2>
            </div>
            <div className="rnext-posts-wrapper">
                <div className="post-wrapper">
                    <div className="img-wrapper">
                        <img src="../../assets/img/post-img02.png" />
                    </div>
                    <div className="txt-wrapper">
                        <p className="label">By <span>John Doe</span> | Aug 23, 2021</p>
                        <h3>A UX Case Study Creating a Studious Environment for Students:</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>
                <div className="post-wrapper">
                    <div className="img-wrapper">
                        <img src="../../assets/img/post-img03.png" />
                    </div>
                    <div className="txt-wrapper">
                        <p className="label">By <span>John Doe</span> | Aug 23, 2021</p>
                        <h3>A UX Case Study Creating a Studious Environment for Students:</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>
                <div className="post-wrapper">
                    <div className="img-wrapper">
                        <img src="../../assets/img/post-img04.png" />
                    </div>
                    <div className="txt-wrapper">
                        <p className="label">By <span>John Doe</span> | Aug 23, 2021</p>
                        <h3>A UX Case Study Creating a Studious Environment for Students:</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>                
            </div>
        </div>
    )
}

export default ReadNext;