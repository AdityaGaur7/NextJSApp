import React from 'react'
import Nav from '../Components/Nav'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PersonIcon from '@mui/icons-material/Person';
import { DisplaySettings } from '@mui/icons-material';
export default function Dev() {
  return (
    <div>
      <Nav/>
      <div className="center">
        <h1>Developer </h1>
        <p>It's me Aditya Gaur</p>
        <img style={{margin:'auto'}} src="images/Bird.jpg" alt="" />
        <div style={{display:'block'}}> <h3>Check My Portfolio <a href="#"><PersonIcon/></a></h3></div>
       
        <h4>Connect with me</h4>
        <ul className='flex bada'>
            <li><a href="#" className='linkedin'><LinkedInIcon/></a></li>
            <li><a href="#" className='insta'><InstagramIcon/></a></li>
            <li><a href="#" className='yt'><YouTubeIcon/></a></li>
        </ul>
      </div>
    </div>
  )
}
