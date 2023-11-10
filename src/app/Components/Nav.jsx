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
          <h2>Artwork</h2>
        </div>
        <div className="right">
            <ul>
                <li><Link href='/'><HomeIcon/></Link></li>
                <li><Link href='/Artist'><ColorLensIcon/></Link></li>
                <li><Link href='/Dev'><CodeIcon/></Link></li>
            </ul>
        </div>
    </div>
    </div>
  )
}
