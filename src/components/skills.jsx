import React from 'react'
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
    <div >
      <h1 className="skills_headline title_name">Skills</h1>
    </div>
   <div style={{borderLeft:"1px #00FFFF solid", paddingLeft:"20px"}}>
      <h1 className="skill_set title_sub_name">Frontend Development</h1>
      <div className="skills_container">
        <div>
          <img className="skills_img" src={html} alt="HTML5 logo" />
          <p className="skill_name">HTML</p>
        </div>
        <div>
          <img className="skills_img" src={css} alt="CSS logo"/>
          <p className="skill_name">CSS</p>
        </div>
        <div>
          <img className="skills_img" src={bootstrap} alt="bootstrap logo" />
          <p className="skill_name">Bootstrap</p>
        </div>
        <div>
          <img className="skills_img" src={js} alt="js logo" />
          <p className="skill_name">JavaScript</p>
        </div>
        <div>
          <img className="skills_img" src={Tailwind} alt="jquery logo" />
          <p className="skill_name">Tailwind</p>
        </div>
        <div>
          <img className="skills_img" src={react} alt="react logo" />
          <p className="skill_name">React</p>
        </div>
      </div>
      <h1 className="skill_set title_sub_name">Backend Development</h1>
      <div className="skills_container">
        <div>
          <img className="skills_img" src={java} alt="java logo"/>
          <p className="skill_name">Java</p>
        </div>
        <div>
          <img className="skills_img" src={mysql} alt="mongoDb logo" />
          <p className="skill_name">MySQL</p>
        </div>
        <div>
          <img className="skills_img" src={firebase} alt="firebase logo"/>
          <p className="skill_name">Firebase</p>
        </div>
        <div>
          <img className="skills_img" src={spring} alt="spring logo"/>
          <p className="skill_name">Spring</p>
        </div>
      </div>
      <h1 className="skill_set title_sub_name">Development Tools</h1>
      <div className="skills_container">
      <div>
          <img className="skills_img" style={{padding:"10px"}} src={figma} alt="figma logo"/>
          <p className="skill_name">Figma</p>
        </div>
        <div>
          <img className="skills_img" src={vsCode} alt="VS logo" />
          <p className="skill_name">VS Code</p>
        </div>
        <div>
          <img className="skills_img" src={eclipse} alt="android studio logo" />
          <p className="skill_name">Android Studio</p>
        </div>
        <div>
          <img className="skills_img" src={androidStudio} alt="android studio logo" />
          <p className="skill_name">Android Studio</p>
        </div>
        <div>
          <img className="skills_img" src={git} alt="git logo"/>
          <p className="skill_name">Git</p>
        </div>
        <div>
          <img className="skills_img" src={github} alt="github logo"/>
          <p className="skill_name">GitHub</p>
        </div>
      </div>
   </div>
  </div>
  )
}
