import React, { useRef, useState } from 'react'
import "./contact.css"
import { Helmet } from "react-helmet";
import contactimg from '../assets/contact.png'
import { FaHome } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import facebook from '../assets/facebook.png'
import whatsapp from '../assets/whatsapp.png'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'
import emailjs from "emailjs-com";
import { TiTick } from "react-icons/ti";
import { TiCancel } from "react-icons/ti";
export default function Contact() {
  const formRef = useRef();
  const [isSend,setSend]=useState(false);
  const [isFailed,setFailed]=useState(false);
  const sendEmail = (e) => {
    e.preventDefault(); 
    emailjs
      .sendForm(
        "service_kumaranraja", 
        "template_kumaranraja", 
        formRef.current,
        "BkDqGCMZWScgUbklL" 
      )
      .then(
        (result) => {
          setSend(!isSend);
          setTimeout(()=>setSend(false),4000)
        },
        (error) => {
          setFailed(!isFailed);
          setTimeout(()=>setFailed(false),4000)
        }
      );

    e.target.reset(); 
  };

  return (
    <div>
      <Helmet>
        <title>Contact | Muthukumaran R - Full-Stack Web Developer</title>
        <meta
          name="description"
          content="Contact Muthukumaran R, a Full-Stack Web Developer from Tirunelveli. Reach out for freelance projects or collaborations in React, Laravel, and UI/UX design."
        />
        <meta
          name="keywords"
          content="Contact Muthukumaran, Full-Stack Developer Contact, Freelance Developer, React Developer India, Tirunelveli Developer"
        />
        <meta name="author" content="Muthukumaran R" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ContactPage",
              "mainEntity": {
                "@type": "Person",
                "name": "Muthukumaran R",
                "url": "https://kumaranraja.in/contact",
                "jobTitle": "Full-Stack Web Developer",
                "worksFor": {
                  "@type": "Organization",
                  "name": "Freelance"
                },
                "sameAs": [
                  "https://github.com/Kumaran-raja",
                  "https://www.linkedin.com/in/muthukumaran-r/"
                ]
              }
            }
          `}
        </script>

        {/* Open Graph for Facebook/LinkedIn */}
        <meta property="og:title" content="Contact | Muthukumaran R" />
        <meta
          property="og:description"
          content="Reach out to Muthukumaran R for freelance web and app development services. Specialized in React, Laravel, Flutter."
        />
        <meta property="og:image" content="https://kumaranraja.in/profile.jpg" />
        <meta property="og:url" content="https://kumaranraja.in/contact" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact | Muthukumaran R" />
        <meta
          name="twitter:description"
          content="Let's connect! Reach out to Muthukumaran R for your web/app development needs."
        />
        <meta name="twitter:image" content="https://kumaranraja.in/profile.jpg" />

        {/* Canonical */}
        <link rel="canonical" href="https://kumaranraja.in/contact" />
      </Helmet>
      
        <h1 className='contact_hide'>Contact Us</h1>
        <div className='contact_grid'>
        <div className='img_with_name'>
            <h1 className='contact_content'>Contact Us</h1>
            <img className='contact_img' src={contactimg} alt="muthukumaran r portfolio contact image" />
        </div>
        <form ref={formRef} className='contact_msg_container' onSubmit={sendEmail}>
            <div>
                <label htmlFor="name" style={{color:"#FFD700",fontSize:"20px"}}>Name</label><br />
                <input type="text" name='name' required/>
            </div>
            <div>
                <label htmlFor="email" style={{color:"#FFD700",fontSize:"20px"}}>Email</label><br />
                <input type="email" name='email' required/>
            </div>
            <div>
                <label htmlFor="message" style={{color:"#FFD700",fontSize:"20px"}}>Message</label><br />
                <textarea name='message' required/>
            </div>
            <button className="btn btn-primary" style={{padding:"10px 40px"}} type='submit'>Submit</button>
        </form>
        <div className='contact_address_container'>
            <div className='contact_each_address'>
            <FaHome className='contact_icon' style={{color:"#F7E7CE"}}/>
                <div>
                    <h3 style={{color:"#FFD700",marginBottom:"10px"}}>Address</h3>
                    <p style={{textAlign:"justify",wordBreak:"break-word",color:"#F7E7CE"}}>136/2 Nadar street,
                    Sirumalanchi,Tirunelveli, Tamilnadu - 627103</p>
                </div>
            </div>
            <div className='contact_each_address'>
                <FaPhoneAlt className='contact_icon' style={{color:"#F7E7CE"}}/>
                <div>
                    <h3 style={{color:"#FFD700",marginBottom:"10px"}}>Phone</h3>
                    <a href="tel:+919543439311" style={{color:"#F7E7CE"}}>+91 9543439311</a>
                </div>
            </div>
            <div className='contact_each_address' >
            <MdEmail className='contact_icon' style={{color:"#F7E7CE"}}/>
                <div>
                    <h3 style={{color:"#FFD700",marginBottom:"10px"}}>Email</h3>
                    <a href="mailto:kumaranraja222@gmail.com" style={{color:"#F7E7CE"}}>kumaranraja222@gmail.com</a>
                    <p></p>
                </div>
            </div>
            <div style={{display:"flex",justifyContent:"space-around"}}>
            <a href="https://www.instagram.com/kumaranraja_22/" target='_blank'><img className="contact_icons" style={{margin:"15px"}} src={instagram} alt="instagram"/></a>
            <a href="https://www.linkedin.com/in/muthukumaran-r/" target='_blank'><img className="contact_icons" style={{margin:"15px"}}  src={linkedin} alt="Linkedin"/></a>
            <a href="https://www.facebook.com/kumaranraja22/" target='_blank'><img className="contact_icons" style={{margin:"15px"}}  src={facebook} alt="Facebook"/></a>
            <a href="https://wa.me/919543439311?text=Hi there!" target='_blank'><img className="contact_icons" style={{margin:"15px"}}  src={whatsapp} alt="whatsapp"/></a>
        </div>
        </div>
        </div>
        <div>
          <div className='send' style={{display:isSend?"flex":"none" ,alignItems:"center"}}>
            <TiTick style={{color:"#5CB338",width:"50px",height:"50px"}}/>
            <p style={{display:"block",margin:"auto 10px"}}>Message Sent Successfully!</p>
          </div>
          <div className='failed' style={{display:isFailed?"flex":"none" ,alignItems:"center"}}>
            <TiCancel style={{color:"red",width:"50px",height:"50px",marginLeft:"10px"}}/>
            <p style={{display:"block",margin:"auto 10px"}}>Message Not Sent Try Again</p>
          </div>
        </div>
    </div>
    
  )
}
