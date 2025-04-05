import React from 'react'
import { Helmet } from 'react-helmet'
import "./skills.css"
import html from '../assets/html.png'
import js from '../assets/js.png'
import css from '../assets/css.png'
import java from '../assets/java.png'
import react from '../assets/react.png'
import mysql from '../assets/MySQL.png'
import firebase from '../assets/firebase.png'
import git from '../assets/git.png'
import github from '../assets/github.png'
import androidStudio from '../assets/android-studio.png'
import vsCode from '../assets/visual-studio.png'
import spring from '../assets/spring-boot.png'
import Tailwind from '../assets/Tailwind CSS.png'
import bootstrap from '../assets/bootstrap.png'
import figma from '../assets/figma.png'
import eclipse from '../assets/Eclipse IDE.png'
export default function Skills() {
  return (
    <div id="skills">
       <Helmet>
        <title>Skills | Muthukumaran R - Full-Stack Developer</title>
        <meta
          name="description"
          content="Tech stack and tools used by Muthukumaran R, a Full-Stack Developer skilled in React, Laravel, Flutter, Node.js, and UI/UX design."
        />
        <meta
          name="keywords"
          content="Muthukumaran R Skills, Tech Stack, React, Laravel, Flutter, Full-Stack Developer, Web Technologies"
        />
        <meta name="author" content="Muthukumaran R" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Skills | Muthukumaran R",
              "url": "https://kumaranraja.in/skills",
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
        <meta property="og:title" content="Skills | Muthukumaran R" />
        <meta
          property="og:description"
          content="Discover the front-end and back-end skills of Muthukumaran R, including React, Laravel, Node.js, and Flutter."
        />
        <meta property="og:image" content="https://kumaranraja.in/profile.jpg" />
        <meta property="og:url" content="https://kumaranraja.in/skills" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Skills | Muthukumaran R" />
        <meta
          name="twitter:description"
          content="Tech stack and skills of Full-Stack Developer Muthukumaran R."
        />
        <meta name="twitter:image" content="https://kumaranraja.in/profile.jpg" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://kumaranraja.in/skills" />
      </Helmet>
    <div >
      <h1 className="skills_headline title_name">Skills</h1>
    </div>
   <div style={{borderLeft:"1px #00FFFF solid", paddingLeft:"20px"}}>
      <h1 className="skill_set title_sub_name">Frontend Development</h1>
      <div className="skills_container">
        <div>
          <img className="skills_img" loading="lazy" src={html} alt="muthukumaran r portfolio HTML5 logo" />
          <p className="skill_name">HTML</p>
        </div>
        <div>
          <img className="skills_img" loading="lazy" src={css} alt="muthukumaran r portfolio CSS logo"/>
          <p className="skill_name">CSS</p>
        </div>
        <div>
          <img className="skills_img" loading="lazy" src={bootstrap} alt="muthukumaran r portfolio bootstrap logo" />
          <p className="skill_name">Bootstrap</p>
        </div>
        <div>
          <img className="skills_img" loading="lazy" src={js} alt="muthukumaran r portfolio js logo" />
          <p className="skill_name">JavaScript</p>
        </div>
        <div>
          <img className="skills_img" loading="lazy" src={Tailwind} alt="muthukumaran r portfolio jquery logo" />
          <p className="skill_name">Tailwind</p>
        </div>
        <div>
          <img className="skills_img" loading="lazy" src={react} alt="muthukumaran r portfolio react logo" />
          <p className="skill_name">React</p>
        </div>
      </div>
      <h1 className="skill_set title_sub_name">Backend Development</h1>
      <div className="skills_container">
        <div>
          <img className="skills_img" loading="lazy" src={java} alt="muthukumaran r portfolio java logo"/>
          <p className="skill_name">Java</p>
        </div>
        <div>
          <img className="skills_img" loading="lazy" src={mysql} alt="muthukumaran r portfolio mongoDb logo" />
          <p className="skill_name">MySQL</p>
        </div>
        <div>
          <img className="skills_img" loading="lazy" src={firebase} alt="muthukumaran r portfolio firebase logo"/>
          <p className="skill_name">Firebase</p>
        </div>
        <div>
          <img className="skills_img" loading="lazy" src={spring} alt="muthukumaran r portfolio spring logo"/>
          <p className="skill_name">Spring</p>
        </div>
      </div>
      <h1 className="skill_set title_sub_name">Development Tools</h1>
      <div className="skills_container">
      <div>
          <img className="skills_img" loading="lazy" style={{padding:"10px"}} src={figma} alt="muthukumaran r portfolio figma logo"/>
          <p className="skill_name">Figma</p>
        </div>
        <div>
          <img className="skills_img" loading="lazy" src={vsCode} alt="muthukumaran r portfolio VS logo" />
          <p className="skill_name">VS Code</p>
        </div>
        <div>
          <img className="skills_img" loading="lazy" src={eclipse} alt="muthukumaran r portfolio android studio logo" />
          <p className="skill_name">Android Studio</p>
        </div>
        <div>
          <img className="skills_img" loading="lazy" src={androidStudio} alt="muthukumaran r portfolio android studio logo" />
          <p className="skill_name">Android Studio</p>
        </div>
        <div>
          <img className="skills_img" loading="lazy" src={git} alt="muthukumaran r portfolio git logo"/>
          <p className="skill_name">Git</p>
        </div>
        <div>
          <img className="skills_img" loading="lazy" src={github} alt="muthukumaran r portfolio github logo"/>
          <p className="skill_name">GitHub</p>
        </div>
      </div>
   </div>
  </div>
  )
}
