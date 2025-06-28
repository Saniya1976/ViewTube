import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';
import {useEffect} from 'react';
import { use } from 'react';

function App() {
   const [jokes,setJokes]=useState([]);
   useEffect(()=>{
    axios.get('/api/jokes')
    .then((response)=>{
      setJokes(response.data);
    })
    .catch((error)=>{
      console.log('Error fetching jokes:', error);
    });
  },[]);
  return (
   
    <>
      <h1>Hello World</h1>
      <h2>jokes:{jokes.length}</h2>
      {
        jokes.map((joke,index)=>{
          <div>
            <h3 key={index}>{joke.joke}</h3>
            <p key={index}>{joke.id}</p>
          </div>
        })
      }
    </>
  )
}

export default App
