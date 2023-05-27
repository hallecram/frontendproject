import './Contact.scss';

function Contact(){
    return(
        <div className="contact-container">
            <div className="contact-title">
                <p className="contact-cap">Contact Us</p>
                <h1>Let's Start a Conversation</h1>
                <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. In expedita tempore recusandae, magnam facilis dicta corporis. Non laudantium nihil officia perferendis nobis velit dolore. </p>
            </div>
            <div className="contact-box">
                <div className="info-box">
                    <p>Working Hours</p>
                    <hr></hr>
                    <h5>Monday To Friday</h5>
                    <h5>9:00 AM to 8:00 PM</h5>
                    <p>Our Support Team is available 24/7</p>
                </div>
                <div className="info-box">
                    <p>Contact Us</p>
                    <hr></hr>
                    <h5>020 7993 2905</h5>
                    <p>hello@finsweet.com</p>
                </div>
            </div>
            <div className="contact-form">
                <form>
                    <input type="text" placeholder="Full Name" className="input"></input>
                    <input type="mail" placeholder="Your E-mail" className="input"></input>
                    <select placeholder="Query Related" className="select">
                        <option value="value0"></option>
                        <option value="value1">Lorem, ipsum dolor.</option>
                        <option value="value2">Lorem, ipsum.</option>
                        <option value="value3">Lorem ipsum dolor sit.</option>
                    </select>
                    <textarea placeholder="Message" className="input" rows="4" column="1"></textarea>
                    <input type="submit" value="Send Message" className="btn"></input>
                </form>
            </div>
        </div>
    )
}

export default Contact

