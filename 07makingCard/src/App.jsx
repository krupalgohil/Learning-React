import { useState } from 'react'
import './index.css';
import './App.css'; 
import Card from './components/Card'

function App() {
   
  const users = [
    {
      "name": "Alice Johnson",
      "city": "New York",
      "age": 29,
      "profession": "Software Engineer",
      "profile_picture": "https://example.com/profiles/alice.jpg"
    },
    {
      "name": "Bob Smith",
      "city": "San Francisco",
      "age": 34,
      "profession": "Graphic Designer",
      "profile_picture": "https://example.com/profiles/bob.jpg"
    },
    {
      "name": "Charlie Davis",
      "city": "Los Angeles",
      "age": 40,
      "profession": "Product Manager",
      "profile_picture": "https://example.com/profiles/charlie.jpg"
    },
    {
      "name": "David Williams",
      "city": "Chicago",
      "age": 25,
      "profession": "Marketing Specialist",
      "profile_picture": "https://example.com/profiles/david.jpg"
    },
    {
      "name": "Eva Brown",
      "city": "Boston",
      "age": 30,
      "profession": "Data Analyst",
      "profile_picture": "https://example.com/profiles/eva.jpg"
    }
  ]
  
  return (
      <div className='flex flex-wrap justify-center gap-6 p-10'>
        {users.map(function(elem,index){
          return (
          <Card  
            key={index}
            username={elem.name} 
            age={elem.age} 
            city={elem.city} 
            photo={elem.profile_picture} 
            proff = {elem.profession}
            />)
        })}
      </div>
  )
}

export default App
