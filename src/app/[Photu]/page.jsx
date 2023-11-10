'use client'
import React from 'react'
import Nav from '../Components/Nav'
// import { useRouter } from 'next/navigation'



 function page({params}) {
  // const router = useRouter()
  // const imageurl=router.query;
  // console.log(imageurl);
  return (
    
    <div>
       
      <Nav/>
      <h1>{params.Photu}</h1>
      <br />
      
     
      <img src={`images/${params.Photu}`} style={{margin:'auto',width:'100%',height:'auto'}} alt="" />

    </div>
  )
}
export default page
