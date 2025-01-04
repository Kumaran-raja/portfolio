import React, { useState } from 'react'
import './Header.css'
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
    <div>
        <header id='lap_header'>
            <img className='logo' src={logo} alt="" />
            <div>
              <Link className='menu_item' to='/' onClick={(e)=>linkClick(e,"/")}><li>Home</li></Link>
              <Link className='menu_item' to='/' onClick={(e)=>linkClick(e,"/")}><li>Certificates</li></Link>
              <Link className='menu_item' to='/' onClick={(e)=>linkClick(e,"/")}><li>Skills</li></Link>
              <Link className='menu_item' to='/' onClick={(e)=>linkClick(e,"/")}><li>Projects</li></Link>
              <Link className='menu_item' to='/' onClick={(e)=>linkClick(e,"/")}><li>Contact Us</li></Link>
            </div>
        </header>
        <header id='mobile_header'>
          <div className='mobile_header1'>
            <img className='logo' src={logo} alt="" />
            <GiHamburgerMenu style={{color:"white",display:"block",margin:"auto 20px"}} onClick={()=>{setMenuVisible(!menuVisible)}}/>

          </div>
       
          <div className='mobile_header2' style={{display:menuVisible?"block":"none"}}>
              <RiCloseLargeFill className='nav_close' onClick={()=>{setMenuVisible(!menuVisible)}}/>

              <img className='logo1' src={logo} alt="" />
              <Link className='menu_item' to='/' onClick={(e)=>linkClick(e,"/")}><li>Home</li></Link>
              <Link className='menu_item' to='/' onClick={(e)=>linkClick(e,"/")}><li>Certificates</li></Link>
              <Link className='menu_item' to='/' onClick={(e)=>linkClick(e,"/")}><li>Skills</li></Link>
              <Link className='menu_item' to='/' onClick={(e)=>linkClick(e,"/")}><li>Projects</li></Link>
              <Link className='menu_item' to='/' onClick={(e)=>linkClick(e,"/")}><li>Contact Us</li></Link>
            </div>
        </header>
    </div>
  )
}
