import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import VerticalAlignTopIcon from '@mui/icons-material/VerticalAlignTop';
export default function Foot() {
  return (
    <div>
      <footer className="flex">
        <p className="text-center">
          &copy;{new Date().getFullYear()} | Built with ❣️ & 💻 by Adgaur
        </p>
        <ul className="flex">
          <li>
            <a
              href="https://www.linkedin.com/in/aditya-gaur-mmmut/"
              className="linkedin"
              target="_blank"
            >
              <LinkedInIcon />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/__aditya_gaur_090/"
              className="insta"
              target="_blank"
            >
              <InstagramIcon />
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/@adgaur090"
              className="yt"
              target="_blank"
            >
              <YouTubeIcon />
            </a>
          </li>
        </ul>
      </footer>
     <a href="#top"><button className="top">Scroll To top <VerticalAlignTopIcon/></button></a>
    </div>
  );
}
