import React from 'react'
import "./projects.css"
import { Helmet } from 'react-helmet'
import digitalmarketing from '../assets/digital marketing.webp'
import pacemaker from '../assets/pacemaker.png'
import bricksbreaker from '../assets/brick breaker.png'
import swimmingpool from '../assets/swimming pool project.png'
import sclwebsite from '../assets/scl project.png'
import courseproject from '../assets/course project.png'
import ecommerce from '../assets/e-commerce.png'
import Attendance from '../assets/attendance.png'

export default function Projects() {
  return (
    <section>
          <Helmet>
        <title>Projects | Muthukumaran R - Full-Stack Developer</title>
        <meta
          name="description"
          content="Explore projects by Muthukumaran R built using React, Laravel, Flutter, Node.js, and other modern web technologies."
        />
        <meta
          name="keywords"
          content="Muthukumaran R Projects, Full-Stack Developer Projects, React Projects, Laravel Projects, Flutter Portfolio"
        />
        <meta name="author" content="Muthukumaran R" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              "name": "Projects | Muthukumaran R",
              "url": "https://kumaranraja.in/projects",
              "mainEntity": {
                "@type": "Person",
                "name": "Muthukumaran R",
                "jobTitle": "Full-Stack Web Developer",
                "sameAs": [
                  "https://github.com/Kumaran-raja",
                  "https://www.linkedin.com/in/muthukumaran-r/"
                ]
              }
            }
          `}
        </script>

        {/* Open Graph */}
        <meta property="og:title" content="Projects | Muthukumaran R" />
        <meta
          property="og:description"
          content="Check out the latest full-stack, web, and mobile app projects developed by Muthukumaran R."
        />
        <meta property="og:image" content="https://kumaranraja.in/profile.jpg" />
        <meta property="og:url" content="https://kumaranraja.in/projects" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Projects | Muthukumaran R" />
        <meta
          name="twitter:description"
          content="Explore web and mobile app projects by Muthukumaran R."
        />
        <meta name="twitter:image" content="https://kumaranraja.in/profile.jpg" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://kumaranraja.in/projects" />
      </Helmet>
      <h1 className='project_text_color'> PROJECTS</h1>
      {/* web applications */}
      <h2 style={{textAlign:"center",color:"#FFD700",margin:"40px"}} className='title_name'>Web Applications</h2>
      <div className='project_grid'>
      <div className="card" >
        <img src={ecommerce} loading="lazy" class="card-img-top" alt="muthukumaran r portfolio ecommerce project image"/>
        <div className="card-body">
          <h5 className="card-title">E-Commerce Website</h5>
          <p className="card-text">React Js</p>
          <div style={{display:"flex",justifyContent:"space-between"}}>
            <a href="https://vibevault.onrender.com/" class="btn btn-primary" target='_blank'>View</a>
            <a href="https://github.com/Kumaran-raja/E-commerce-Website" target='_blank' class="btn btn-primary">Source Code</a>
          </div>
        </div>
      </div>
      <div className="card" >
        <img src={swimmingpool} loading="lazy" className="card-img-top" alt="muthukumaran r portfolio swimming pool project image"/>
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
        <img src={sclwebsite} loading="lazy" className="card-img-top" alt="muthukumaran r portfolio school website project image"/>
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
        <img src={courseproject} loading="lazy" className="card-img-top" alt="muthukumaran r portfolio exam portal project image"/>
        <div className="card-body">
          <h5 className="card-title">Exam Portal</h5>
          <p className="card-text">React Js</p>
          <div style={{display:"flex",justifyContent:"space-between"}}>
            <a href="https://course-platform-8xj2.onrender.com/" target='_blank' class="btn btn-primary">View</a>
            <a href="https://github.com/Kumaran-raja/Course-platform" target='_blank' class="btn btn-primary">Source Code</a>
          </div>
        </div>
      </div>
      <div className="card" >
        <img src={Attendance} loading="lazy" className="card-img-top" alt="muthukumaran r portfolio attendance management system project image"/>
        <div className="card-body">
          <h5 className="card-title">Attendance Management System</h5>
          <p className="card-text">JSP, JDBC, MySQL</p>
          <div style={{display:"flex",justifyContent:"space-between"}}>
            {/* <a href="https://course-platform-8xj2.onrender.com/" target='_blank' class="btn btn-primary">View</a> */}
            <a href="https://github.com/Kumaran-raja/Attendance-Project" target='_blank' class="btn btn-primary">Source Code</a>
          </div>
        </div>
      </div>
    </div>
    {/* Android projects */}
      <h2 style={{textAlign:"center",color:"#FFD700",margin:"50px"}} className='title_name'>Android Applications</h2>
      <div className='project_grid'>
      <div className="card" >
        <img src={digitalmarketing} loading="lazy" className="card-img-top" alt="muthukumaran r portfolio ads promotion project image"/>
        <div className="card-body">
          <h5 className="card-title">Ads Promotion Application</h5>
          <p className="card-text">XML, Java, Firebase</p>
            <a href="https://github.com/Kumaran-raja/AdsPromoting-Application" target='_blank' class="btn btn-primary">Source Code</a>
        </div>
      </div>
      <div className="card" >
        <img src={bricksbreaker} loading="lazy" className="card-img-top" alt="muthukumaran r portfolio brick breaker project image"/>
        <div className="card-body">
          <h5 className="card-title">Brick Breaker</h5>
          <p className="card-text">XML, Java</p>
            <a href="https://github.com/Kumaran-raja/brick_breaker" target='_blank' class="btn btn-primary">Source Code</a>
        </div>
      </div>
      <div className="card" >
        <img src={pacemaker} loading="lazy" className="card-img-top" alt="muthukumaran r portfolio pacemaker application project image"/>
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
