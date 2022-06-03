import React from 'react';
import './contact.css';
import {HiOutlineMail} from 'react-icons/hi';
import {AiOutlineWhatsApp} from 'react-icons/ai';

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact me</h2>
      <div className="container contact-container">
        <div className="contact-options">
          <article className='contact-option'>
            <HiOutlineMail className='contact-option-icons'/>
            <h4>Email</h4>
            <h5>nicolas.velez99@hotmail.com</h5>
            <a href="mailto:nicolas.velez99@hotmail.com" target={"__blank"}>Send a Message</a>
          </article>
          <article className='contact-option'>
            <AiOutlineWhatsApp className='contact-option-icons'/>
            <h4>Whatsapp</h4>
            <h5>+57-31968*****</h5>
            <a href="https://api.whatsapp.com/send?phone+573196834350" target={"__blank"}>Send a Message</a>
          </article>
        </div>
        <form action="">
          <input type="text" name='name' placeholder='Your Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact