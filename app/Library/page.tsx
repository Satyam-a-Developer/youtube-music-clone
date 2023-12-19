// import React from 'react'
// import "../post.css"

"use client"
// import axios from "axios";
import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import Image from "next/image";
import axios from "axios";

import styles from "../library.module.css"

export default function Page() {
  const [data,setdata] = useState([])
  // const [images, setImages] = useState([]);
  useEffect(() =>{
  
  fetch('https://api.github.com/users').then(res => res.json())
  .then(data => funck(data))
function funck(data:any) {
console.log(data);
setdata(data);
data.map((datak) =>{
  console.log(datak);
})
}
  },[])



 






  return (
    <main>
          <div className={styles.slidebarforloader}>

  

<div className={styles.cards}>

          <ul >
      {data.map((item:any) => (
        <>
          <li >
         <Image style={{borderRadius:100}} src={item.avatar_url} alt={"dwadawd"} width="200" height="200"  />
         <h3 key={item.login}>{item.login}</h3>
         </li>
        </>

      ))}
    </ul>
    </div>
</div>

    </main>

  ) }
 
  
