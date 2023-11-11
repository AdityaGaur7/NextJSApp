import React from "react";
import Imgy from "./Imgy";
import Link from "next/link";

// import Photo from '../[Photu]/page'
function Art() {
  return (
    <>
    <div>

      <div className="gallery">
        {Imgy.map((val) => {
          let url = `images/${val}`;
          let pic = `Photu/${val}`;
          return (
          <Link key ={val} href={url}><img src={url} alt="" /></Link>
          
          )
          
        })}
      </div>
    
     
    </div>
  
    </>
  );
}

export default Art;
