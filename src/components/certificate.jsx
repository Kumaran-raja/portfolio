import React from 'react'
import "./certificate.css"
import certificate1 from '../assets/certificate1.jpg'
import certificate2 from '../assets/certificate2.jpg'
import certificate3 from '../assets/certificate3.jpg'
import certificate4 from '../assets/frontend certificate.png'
export default function Certificate() {
  return (
    <section>
      <h1 className='title_name'>CERTIFICATIONS</h1>
      <div className='Certificate_grid'>
      <div className="card" >
        <img src={certificate1} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Android App Development</h5>
          <p className="card-text">Developed Android applications using Java, focusing on efficient coding, debugging, and integrating device features to enhance user experience.</p>
          <a href="https://drive.google.com/file/d/1-4JL7ic7ypmbq75FlouULUJqx323weLL/view?usp=sharing" target='_blank' class="btn btn-primary" style={{padding:"10px 40px"}}>View Certificate</a>
        </div>
      </div>
      <div className="card" >
        <img src={certificate2} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Java Programming Intern</h5>
          <p className="card-text">Assisted in Java development, writing clean code, debugging, and supporting feature integration to improve functionality and performance.</p>
          <a href="https://drive.google.com/file/d/1-0ntV3XbvJy7D5BUUXt2Oz5YcOWgvxvF/view?usp=sharing" target='_blank' class="btn btn-primary" style={{padding:"10px 40px"}}>View Certificate</a>
        </div>
      </div>
      <div className="card" >
        <img src={certificate3} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Digital Marketing</h5>
          <p className="card-text">Mastered SEO, social media marketing, content strategy, and data analysis techniques to optimize online presence and drive brand engagement.</p>
          <a href="https://drive.google.com/file/d/1-5pm54VOSLDLMS2EpcPTmQLlPKCoUIH_/view?usp=sharing" target='_blank' class="btn btn-primary" style={{padding:"10px 40px"}}>View Certificate</a>
        </div>
      </div>
      <div className="card" >
        <img src={certificate4} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Front End Development Libraries</h5>
          <p className="card-text">Mastered React, Bootstrap, Tailwind CSS, and jQuery to build responsive, interactive, and visually appealing web applications with optimized performance.</p>
          <a href="https://drive.google.com/file/d/1IRdiJ-HxB3F3AI0FNwcOeqf_M9uAH9_Z/view?usp=drivesdk" target='_blank' class="btn btn-primary" style={{padding:"10px 40px"}}>View Certificate</a>
        </div>
      </div>
    </div>
    </section>
    
  )
}
