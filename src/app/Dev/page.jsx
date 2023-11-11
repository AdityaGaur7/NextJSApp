import React from 'react'
import Nav from '../Components/Nav'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { DisplaySettings } from '@mui/icons-material';
export default function Dev() {
  return (
    <div>
      <Nav/>
      <div className="center">
        <h1>Developer </h1>
        <p>It's me Aditya Gaur</p>
        <img style={{margin:'auto'}} src="images/Me.jpg" alt="" />
        <div style={{display:'block'}}> <h3>Check out My Portfolio <a href="https://adityagaur7.github.io/portfolio-adgaur.github.io/" target='_blank'><OpenInNewIcon/></a></h3></div>
       
        <h4>Connect with me</h4>
        <ul className='flex bada'>
            <li><a href="https://www.linkedin.com/in/aditya-gaur-mmmut/" className='linkedin' target='_blank'><LinkedInIcon/></a></li>
            <li><a href="https://www.instagram.com/__aditya_gaur_090/" className='insta' target='_blank'><InstagramIcon/></a></li>
            <li><a href="https://www.youtube.com/@adgaur090" className='yt' target='_blank'><YouTubeIcon/></a></li>
        </ul>
      </div>
    </div>
  )
}
