import React from 'react'
import "./Contact.css"
import contactimg from '../assets/contact.png'
import { FaHome } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import facebook from '../assets/facebook.png'
import whatsapp from '../assets/whatsapp.png'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'
export default function Contact() {
  return (
        <div className='contact_grid'>
        <div className='img_with_name'>
            <h1 className='contact_content'>Contact Us</h1>
            <img className='contact_img' src={contactimg} alt="" />
        </div>
        <div className='contact_msg_container'>
            <div>
                <label htmlFor="name" style={{color:"#FFD700"}}>Name</label><br />
                <input type="text" />
            </div>
            <div>
                <label htmlFor="email" style={{color:"#FFD700"}}>Email</label><br />
                <input type="email" />
            </div>
            <div>
                <label htmlFor="message" style={{color:"#FFD700"}}>Message</label><br />
                <textarea type="text" />
            </div>
            <a href="https://github.com/Kumaran-raja/Swimming-pool" target='_blank' class="btn btn-primary" style={{padding:"10px 40px"}}>Submit</a>

            {/* <button></button> */}
        </div>
        <div className='contact_address_container'>
            <div className='contact_each_address'>
            <FaHome className='contact_icon'/>
                <div>
                    <h3 style={{color:"#FFD700"}}>Address</h3>
                    <p style={{textAlign:"justify",wordBreak:"break-word"}}>136/2 Nadar street,
                    Sirumalanchi,Tirunelveli, Tamilnadu - 627103</p>
                </div>
            </div>
            <div className='contact_each_address'>
                <FaPhoneAlt className='contact_icon'/>
                <div>
                    <h3 style={{color:"#FFD700"}}>Phone</h3>
                    <a href="tel:+919543439311">+91 9543439311</a>
                </div>
            </div>
            <div className='contact_each_address'>
            <MdEmail className='contact_icon'/>
                <div>
                    <h3 style={{color:"#FFD700"}}>Email</h3>
                    <a href="mailto:kumaranraja222@gmail.com">kumaranraja222@gmail.com</a>
                    <p></p>
                </div>
            </div>
            <div>
              <a href="https://www.instagram.com/kumaranraja_22/" target='_blank'><img className="contact_icons" style={{margin:"15px"}} src={instagram} alt="instagram"/></a>
              <a href="https://www.linkedin.com/in/muthukumaran-r/" target='_blank'><img className="contact_icons" style={{margin:"15px"}}  src={linkedin} alt="Linkedin"/></a>
              <a href="https://www.facebook.com/kumaranraja22/" target='_blank'><img className="contact_icons" style={{margin:"15px"}}  src={facebook} alt="Facebook"/></a>
              <a href="https://wa.me/919543439311?text=Hi there!" target='_blank'><img className="contact_icons" style={{margin:"15px"}}  src={whatsapp} alt="whatsapp"/></a>
          </div>
        </div>
    </div>
  )
}