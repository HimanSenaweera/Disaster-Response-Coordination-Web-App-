import React from 'react'
import "./Contact.css"

import pic1 from '../../assets/mail.png'
import pic2 from '../../assets/call.png'
import pic3 from '../../assets/address.png'

export default function Contact() {
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message</h3>
            <p>
                Feel free to reach out to us through the contact form or use the contact details below. Your feedback, questions, and suggestions are vital as we work to strengthen disaster response coordination. Whether you're a first responder, volunteer, affected individual, or part of a government agency, we're here to support you and improve the way communities respond to crises.
            </p>

            <ul>
                <li> <img src={pic1} alt="" />senaweerasahd.22@uom.lk </li>
                <li> <img src={pic2} alt="" />+ 94-716297097</li>
                <li> <img src={pic3} alt="" />456/3 , Kohalwila Road , Kelaniya</li>
            </ul>
        </div>
        <div className='contact-col'>
            <form >
                <label> Your Name </label>
                <input type="text" name='name' placeholder='Enter your name' required />
                <label> Phone Number </label>
                <input type="tel" name='phone' placeholder='Enter your mobile number' />
                <label> Write your messages here </label>
                <textarea name='message' rows='6' placeholder='Enter your message' />
                <button type='submit' className='fancy-submit'> Submite now</button>
            </form>
        
        </div>

    </div>
  )
}
