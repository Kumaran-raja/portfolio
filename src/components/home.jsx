import React from 'react'
import './home.css'
import myphoto from '../assets/profile.jpg'
import instagram from '../assets/instagram.png'
import facebook from '../assets/facebook.png'
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'
import whatsapp from '../assets/whatsapp.png'
export default function Home() {
  return (
    <div id='Home'>
        <div>
          <img src={myphoto} loading="lazy" alt="muthukumaran r portfolio photo" className='myphoto'/>
          <h1 className='name' style={{color:"#F8D9B7"}}>Hi, I am <strong>MUTHUKUMARAN R</strong></h1>
          <h2 className='designation'>
          UI/UX Designer | Full-Stack Developer | Application Developer
          </h2>
          <div>
            <a href="https://www.instagram.com/kumaranraja_22/" target='_blank'><img className="contact_icons" src={instagram} alt="instagram"/></a>
            <a href="https://www.linkedin.com/in/muthukumaran-r/" target='_blank'><img className="contact_icons" src={linkedin} alt="Linkedin"/></a>
            <a href="https://github.com/Kumaran-raja" target='_blank'><img className="contact_icons" src={github} alt="Github"/></a>
            <a href="https://www.facebook.com/kumaranraja22/" target='_blank'><img className="contact_icons" src={facebook} alt="Facebook"/></a>
            <a href="https://wa.me/919543439311?text=Hi there!" target='_blank'><img className="contact_icons" src={whatsapp} alt="whatsapp"/></a>
          </div>
        </div>
    </div>
  )
}
