import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react';
import './home.css';

 const ContactUs = () => {
  const form = useRef();
const [emailIsSent,setEmailIsSent] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3ep4cz1', 'template_mmz63ub', form.current, 'GGteIczQ632Mu9JBw')
      .then((result) => {
            setEmailIsSent(true)
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
   emailIsSent ? (<p>Sent!</p>):
    (<form className='form' ref={form} onSubmit={sendEmail}>
      <label>Name</label> <br />
      <input className="name-field" required type="text" name="user_name" /> <br /> <br />
      <label>Email</label> <br />
      <input className="email-field" required type="email" name="user_email" /><br /><br />
      <label>Message</label> <br />
      <textarea className="text-field" required cols="40" rows="13" name="message" /> <br />
      <input  className='email-send-button'  type="submit" value="Send" />
    </form>
    )
  );
};
export default ContactUs