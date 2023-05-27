import './Post.scss'

const Post = () => {
    return (
        <div className="post-container">
            <div className="post-author-wrapper">
                <div className="img-wrapper">
                    <img src="../../assets/img/fmiles.png" />
                </div>
                <div className="txt-wrapper">
                    <h3>Andrew Johnson</h3>
                    <p>Posted on 27th January 2022</p>
                </div>
            </div>
            <div className="post-title-wrapper">
                <h1>Step-by-step guide to choosing great font pairs</h1>
                <div className="post-cat-wrapper">
                    <img className="post-img" src="../../assets/img/startup.png"/>
                    <h4>Startup</h4>
                </div>
            </div>
            <div className="post-img-wrapper">
                <img src="../../assets/img/post-01.png" />
            </div>
            <section className="post-body">
                <article>
                    <h2>Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </article>
                <article>
                    <h2>Turpis tincidunt id aliquet risus feugiat in ante metus dictum</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <p>
                        Blandit cursus risus at ultrices mi tempus imperdiet nulla malesuada. Libero justo laoreet sit amet cursus sit amet dictum sit. Nascetur ridiculus mus mauris vitae. Mi quis hendrerit dolor magna eget est lorem ipsum dolor. Fringilla ut morbi tincidunt augue interdum. Odio ut sem nulla pharetra diam sit amet nisl suscipit. Aliquam ultrices sagittis orci a scelerisque purus semper eget. Sit amet volutpat consequat mauris nunc congue nisi vitae. Suspendisse sed nisi lacus sed viverra. Et egestas quis ipsum suspendisse. Lacus sed viverra tellus in hac habitasse platea dictumst vestibulum. Volutpat odio facilisis mauris sit amet massa vitae tortor condimentum. Nulla facilisi etiam dignissim diam. Sit amet purus gravida quis blandit. Pellentesque diam volutpat commodo sed. Amet est placerat in egestas erat. Cras adipiscing enim eu turpis. Ipsum a arcu cursus vitae congue mauris.
                    </p>
                    <ul>
                        <li>
                            <h4>
                                Lorem ipsum dolor sit amet
                            </h4>
                        </li>
                        <li>
                            <h4>
                                Non blandit massa enim nec scelerisque
                            </h4>
                        </li>
                        <li>
                            <h4>
                                Neque egestas congue quisque egestas
                            </h4>
                        </li>
                    </ul>
                </article>
                <article>
                    <h2>Ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </article>
            </section>
            

        </div>
    )
};

export default Post;