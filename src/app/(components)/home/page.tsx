'use client'
import React, { useEffect } from "react";
import { useState } from "react";
import { preconnect } from "../../../../node_modules/next/dist/server/app-render/entry-base";


const info = {
  name : 'Tuans',
  age: 20
}
function HomePage(){

  
  const [posts, setPost] = useState([]);
  const [name,setName] = useState('');
  document.title = name;
    
  
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(respon => respon.json())
      .then(post => {
        setPost(post);
        // console.log(posts);
      });
    
      
      
  },[])
  
  
  
  return (
    <div className="text-center"> 
    <ul>
      {
      posts.map(post =>(
        <h2>{post['title']}</h2>
      ))
      }
    </ul>
      <input type="text" 
      value={name}
      onChange={e=> setName(e.target.value)}/>
      
    </div>
  )
}
export default HomePage;