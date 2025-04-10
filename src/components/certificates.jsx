import React from 'react'
import "./certificate.css"
import { Helmet } from "react-helmet";
import certificate1 from '../assets/certificate1.jpg'
import certificate2 from '../assets/certificate2.jpg'
import certificate3 from '../assets/certificate3.jpg'
import certificate4 from '../assets/frontend certificate.png'
export default function Certificate() {
  return (
    <section>
      <Helmet>
        <title>Certificates | Muthukumaran R - Full-Stack Web Developer</title>
        <meta
          name="description"
          content="Browse certificates earned by Muthukumaran R in Full-Stack Development, React, Laravel, Flutter, and UI/UX design."
        />
        <meta
          name="keywords"
          content="Certificates, Developer Certificates, React Certificate, Full-Stack Developer, Muthukumaran R"
        />
        <meta name="author" content="Muthukumaran R" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Structured Data - Optional but Good for SEO */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              "name": "Certificates | Muthukumaran R",
              "url": "https://kumaranraja.in/certificates",
              "about": {
                "@type": "Person",
                "name": "Muthukumaran R",
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

        {/* Open Graph */}
        <meta property="og:title" content="Certificates | Muthukumaran R" />
        <meta
          property="og:description"
          content="Achievements and certificates earned by Muthukumaran R in Full-Stack Development."
        />
        <meta property="og:image" content="https://kumaranraja.in/profile.jpg" />
        <meta property="og:url" content="https://kumaranraja.in/certificates" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Certificates | Muthukumaran R" />
        <meta
          name="twitter:description"
          content="Check out verified certificates of Muthukumaran R in web and app development."
        />
        <meta name="twitter:image" content="https://kumaranraja.in/profile.jpg" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://kumaranraja.in/certificates" />
      </Helmet>
      <h1 className='title_name'>CERTIFICATIONS</h1>
      <div className='Certificate_grid'>
      <div className="card" >
        <img src={certificate1} loading="lazy" className="card-img-top" alt="Muthukumaran R android development certificate"/>
        <div className="card-body">
          <h5 className="card-title">Android App Development</h5>
          <p className="card-text">Developed Android applications using Java, focusing on efficient coding, debugging, and integrating device features to enhance user experience.</p>
          <a href="https://drive.google.com/file/d/1-4JL7ic7ypmbq75FlouULUJqx323weLL/view?usp=sharing" target='_blank' class="btn btn-primary" style={{padding:"10px 40px"}}>View Certificate</a>
        </div>
      </div>
      <div className="card" >
        <img src={certificate2} loading="lazy" className="card-img-top" alt="Muthukumaran R java programming intern certificate"/>
        <div className="card-body">
          <h5 className="card-title">Java Programming Intern</h5>
          <p className="card-text">Assisted in Java development, writing clean code, debugging, and supporting feature integration to improve functionality and performance.</p>
          <a href="https://drive.google.com/file/d/1-0ntV3XbvJy7D5BUUXt2Oz5YcOWgvxvF/view?usp=sharing" target='_blank' class="btn btn-primary" style={{padding:"10px 40px"}}>View Certificate</a>
        </div>
      </div>
      <div className="card" >
        <img src={certificate3} loading="lazy" className="card-img-top" alt="Muthukumaran R digital marketing certificate"/>
        <div className="card-body">
          <h5 className="card-title">Digital Marketing</h5>
          <p className="card-text">Mastered SEO, social media marketing, content strategy, and data analysis techniques to optimize online presence and drive brand engagement.</p>
          <a href="https://drive.google.com/file/d/1-5pm54VOSLDLMS2EpcPTmQLlPKCoUIH_/view?usp=sharing" target='_blank' class="btn btn-primary" style={{padding:"10px 40px"}}>View Certificate</a>
        </div>
      </div>
      <div className="card" >
        <img src={certificate4} loading="lazy" className="card-img-top" alt="Muthukumaran R front end libraries development certificate"/>
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
