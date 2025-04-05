import React, { useState } from 'react'
import './header.css'
import logo from '../assets/logo.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLargeFill } from "react-icons/ri";
import { Link, useNavigate } from 'react-router';
export default function Header() {
  const [menuVisible,setMenuVisible]=useState(false);
  const navigate=useNavigate();
  const linkClick=(e,path)=>{
    if(menuVisible){
      setMenuVisible(!menuVisible)
    }else{
      navigate(path);
    }
  }
  return (
    <div style={{position:"sticky",top:"0" ,backgroundColor:"black",zIndex:"1000"}}>
        <header id='lap_header'>
        <div style={{display:"flex"}}>
            <img className='logo' loading="lazy" src={logo} alt="muthukumaran r portfolio logo" />
            <h1 style={{display:"block",margin:"auto 10px",color:"#FFD700"}} className='title_sub_name'>KUMARANRAJA</h1>
            </div>
            <div>
              <Link className='menu_item' to='/' onClick={(e)=>linkClick(e,"/")}><li>Home</li></Link>
              <Link className='menu_item' to='/certificates' onClick={(e)=>linkClick(e,"/certificates")}><li>Certifications</li></Link>
              <Link className='menu_item' to='/skills' onClick={(e)=>linkClick(e,"/skills")}><li>Skills</li></Link>
              <Link className='menu_item' to='/projects' onClick={(e)=>linkClick(e,"/projects")}><li>Projects</li></Link>
              <Link className='menu_item' to='/contact' onClick={(e)=>linkClick(e,"/contact")}><li>Contact</li></Link>
            </div>
        </header>
        <header id='mobile_header'>
          <div className='mobile_header1'>
            <div style={{display:"flex"}}>
            <img className='logo' loading="lazy" src={logo} alt="muthukumaran r portfolio logo" />
            <h1 style={{display:"block",margin:"auto 10px",color:"#FFD700"}} className='title_sub_name'>KUMARANRAJA</h1>
            </div>
            <GiHamburgerMenu className='menu_icon'  onClick={()=>{setMenuVisible(!menuVisible)}}/>
          </div>
       
          <div className='mobile_header2' style={{display:menuVisible?"block":"none"}}>
              <RiCloseLargeFill className='nav_close' onClick={()=>{setMenuVisible(!menuVisible)}}/>

              <img className='logo1' loading="lazy" src={logo} alt="muthukumaran r portfolio logo" />
              <Link className='menu_item' to='/' onClick={(e)=>linkClick(e,"/")}><li>Home</li></Link>
              <Link className='menu_item' to='/certificates' onClick={(e)=>linkClick(e,"/certificates")}><li>Certifications</li></Link>
              <Link className='menu_item' to='/skills' onClick={(e)=>linkClick(e,"/skills")}><li>Skills</li></Link>
              <Link className='menu_item' to='/projects' onClick={(e)=>linkClick(e,"/projects")}><li>Projects</li></Link>
              <Link className='menu_item' to='/contact' onClick={(e)=>linkClick(e,"/contact")}><li>Contact</li></Link>
            </div>
        </header>
    </div>
  )
}
