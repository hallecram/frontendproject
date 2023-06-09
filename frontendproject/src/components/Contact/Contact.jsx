import { useState, useEffect } from 'react';
import CatData from '../../assets/data/CatData';
import './Contact.scss';

function Contact(){
    const initialValue = {fullname:"", email:"", subject:"", message:""};
    const [formValue, setFormValue] = useState(initialValue);
    const [formError, setFormError] = useState({});
    const [formSubmit, setFormSubmit] = useState(false);

    const handleChange = (eventArgs) => {
        const { name, value } = eventArgs.target;
        setFormValue({...formValue, [name]: value });
    }

    const handleSubmit = (eventArgs) => {
        eventArgs.preventDefault();
        setFormError(validation(formValue));
        setFormSubmit(true);
    }

    useEffect(() => {
        if(Object.keys(formError).length === 0 && formSubmit){
            console.log(formValue);
        }
    }, [formError, formValue, formSubmit])

    const validation = (values) => {
        const Error = {};
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const regexName = /^[a-zA-Z ]{3,}$/;

        if(!values.fullname){
            Error.fullname = "Please, enter your full name";
        }else if(!regexName.test(values.fullname)){
            Error.fullname = "Full name must be more than 3 digits and do not have numbers or special characters";
        }
        if(!values.email){
            Error.email = "Please, enter your email";
        } else if(!regexEmail.test(values.email)){
            Error.email = "This is not a valid email format";
        }
        if(!values.subject){
            Error.subject = "Please, choose an option";
        }
        if(!values.message){
            Error.message = "Please, write down your message";
        }
        return Error;
    }

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
                {Object.keys(formError).length === 0 && formSubmit ? (
                        <p className="form-success">Thanks for your contact! Your message have been sent successfully!</p>
                ): null}
                <form onSubmit={handleSubmit}>
                    <p className="form-error">{formError.fullname}</p>
                    <input 
                        className="input" 
                        type="text" 
                        name="fullname"
                        placeholder="Full Name" 
                        value={formValue.fullname} 
                        onChange={handleChange}
                    />
                    <p className="form-error">{formError.email}</p>
                    <input 
                        className="input"
                        type="mail" 
                        name="email"
                        placeholder="Your E-mail" 
                        value={formValue.email} 
                        onChange={handleChange}
                    />
                    <p className="form-error">{formError.subject}</p>
                    <select 
                        className="select"
                        name="subject" 
                        placeholder="Query Related" 
                        value={formValue.subject} 
                        onChange={handleChange}
                    >
                        <option value="none"></option>
                        {CatData.map((catData, catIndex) => {
                            const {id,catName} = catData;
                            return(
                                <option key={id} value={catName}>{catName}</option>
                            )
                        }
                        )}
                    </select>
                    <p className="form-error">{formError.message}</p>
                    <textarea 
                        name="message" 
                        className="input" 
                        placeholder="Message" 
                        rows="4" 
                        column="1"
                        value={formValue.message} 
                        onChange={handleChange}
                    />
                    <input type="submit" value="Send Message" className="btn"></input>
                </form>
            </div>
        </div>
    )
}

export default Contact