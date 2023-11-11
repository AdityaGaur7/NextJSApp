import Link from 'next/link'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import CodeIcon from '@mui/icons-material/Code';
export default function Nav() {
  return (
    <div>
    <div className="navi" >
        <div className="left">
         <img src="images/logo.png" alt="" />
        </div>
        <div className="right" id='top'>
            <ul>
                <li><Link href='/'><span>Home</span><HomeIcon/></Link></li>
                <li><Link href='/Artist'><span>Artist</span><ColorLensIcon/></Link></li>
                <li><Link href='/Dev'><span>Dev</span><CodeIcon/></Link></li>
            </ul>
        </div>
    </div>
    </div>
  )
}
