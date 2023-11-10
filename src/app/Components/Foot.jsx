import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
export default function Foot() {
  return (
   
    <div>
      <footer className='flex'>
        <p className="text-center">&copy;{new Date().getFullYear()} | Built with ❣️ & 💻 by Adgaur</p>
        <ul className='flex'>
            <li><a href="#" className='linkedin'><LinkedInIcon/></a></li>
            <li><a href="#" className='insta'><InstagramIcon/></a></li>
            <li><a href="#" className='yt'><YouTubeIcon/></a></li>
        </ul>
      </footer>
    </div>
  )
}
