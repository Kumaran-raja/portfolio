import React from 'react'
import "./Certificate.css"
import certificate1 from '../assets/certificate1.jpg'
import certificate2 from '../assets/certificate2.jpg'
import certificate3 from '../assets/certificate3.jpg'
export default function Certificate() {
  return (
    <section>
      <h1 style={{textAlign:"center",color:"#FFD700"}}>CERTIFICATIONS</h1>
      <div className='Certificate_grid'>
      <div class="card" >
        <img src={certificate1} class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Android App Development</h5>
          <p class="card-text">Developed Android applications using Java, focusing on efficient coding, debugging, and integrating device features to enhance user experience.</p>
          <a href="https://drive.google.com/file/d/1-4JL7ic7ypmbq75FlouULUJqx323weLL/view?usp=sharing" target='_blank' class="btn btn-primary">View Certificate</a>
        </div>
      </div>
      <div class="card" >
        <img src={certificate2} class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Java Programming Intern</h5>
          <p class="card-text">Assisted in Java development, writing clean code, debugging, and supporting feature integration to improve functionality and performance.</p>
          <a href="https://drive.google.com/file/d/1-0ntV3XbvJy7D5BUUXt2Oz5YcOWgvxvF/view?usp=sharing" target='_blank' class="btn btn-primary">View Certificate</a>
        </div>
      </div>
      <div class="card" >
        <img src={certificate3} class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Digital Marketing</h5>
          <p class="card-text">Mastered SEO, social media marketing, content strategy, and data analysis techniques to optimize online presence and drive brand engagement.</p>
          <a href="https://drive.google.com/file/d/1-5pm54VOSLDLMS2EpcPTmQLlPKCoUIH_/view?usp=sharing" target='_blank' class="btn btn-primary">View Certificate</a>
        </div>
      </div>
      
    </div>
    </section>
    
  )
}
