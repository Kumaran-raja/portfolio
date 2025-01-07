import React from 'react'
import "./Projects.css"
import digitalmarketing from '../assets/digital marketing.webp'
import pacemaker from '../assets/pacemaker.png'
import bricksbreaker from '../assets/brick breaker.png'
import swimmingpool from '../assets/swimming pool project.png'
import sclwebsite from '../assets/scl project.png'
import courseproject from '../assets/course project.png'
import ecommerce from '../assets/e-commerce.png'
export default function Projects() {
  return (
    <section>
      <h1 className='project_text_color'> PROJECTS</h1>
      {/* web applications */}
      <h2 style={{textAlign:"center",color:"#FFD700",margin:"40px"}} className='title_name'>Web Applications</h2>
      <div className='project_grid'>
      <div className="card" >
        <img src={ecommerce} class="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">E-Commerce Website</h5>
          <p className="card-text">React Js</p>
          <div style={{display:"flex",justifyContent:"space-between"}}>
            <a href="https://vibevault.onrender.com/" class="btn btn-primary" target='_blank' style={{padding:"10px 20px"}}>View</a>
            <a href="https://github.com/Kumaran-raja/E-commerce-Website" target='_blank' class="btn btn-primary">Source Code</a>
          </div>
        </div>
      </div>
      <div className="card" >
        <img src={swimmingpool} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Swimming Pool Website</h5>
          <p className="card-text">HTML, CSS, JS</p>
          <div style={{display:"flex",justifyContent:"space-between"}}>
            <a href="https://swimmingpoolwebsitetemplate.netlify.app/" target='_blank' class="btn btn-primary">View</a>
            <a href="https://github.com/Kumaran-raja/Swimming-pool" target='_blank' class="btn btn-primary">Source Code</a>
          </div>
        </div>
      </div>
      <div className="card" >
        <img src={sclwebsite} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">School Website</h5>
          <p className="card-text">HTML, CSS, JS</p>
          <div style={{display:"flex",justifyContent:"space-between"}}>
            <a href="https://sclwebsite.netlify.app/" target='_blank' class="btn btn-primary">View</a>
            <a href="https://github.com/Kumaran-raja/School-Website" target='_blank' class="btn btn-primary">Source Code</a>
          </div>
        </div>
      </div>
      <div className="card" >
        <img src={courseproject} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Exam Portal</h5>
          <p className="card-text">React Js</p>
          <div style={{display:"flex",justifyContent:"space-between"}}>
            <a href="https://course-platform-8xj2.onrender.com/" target='_blank' class="btn btn-primary">View</a>
            <a href="https://github.com/Kumaran-raja/Course-platform" target='_blank' class="btn btn-primary">Source Code</a>
          </div>
        </div>
      </div>
    </div>
    {/* Android projects */}
      <h2 style={{textAlign:"center",color:"#FFD700",margin:"50px"}} className='title_name'>Android Applications</h2>
      <div className='project_grid'>
      <div className="card" >
        <img src={digitalmarketing} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Ads Promotion Application</h5>
          <p className="card-text">XML, Java, Firebase</p>
            <a href="https://github.com/Kumaran-raja/AdsPromoting-Application" target='_blank' class="btn btn-primary">Source Code</a>
        </div>
      </div>
      <div className="card" >
        <img src={bricksbreaker} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Brick Breaker</h5>
          <p className="card-text">XML, Java</p>
            <a href="https://github.com/Kumaran-raja/brick_breaker" target='_blank' class="btn btn-primary">Source Code</a>
        </div>
      </div>
      <div className="card" >
        <img src={pacemaker} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">PaceMaker Application</h5>
          <p className="card-text">XML, Java, Firebase</p>
            <a href="https://github.com/Kumaran-raja/paceCAP" target='_blank' class="btn btn-primary">Source Code</a>
        </div>
      </div>
    </div>

    
    </section>
  )
}
