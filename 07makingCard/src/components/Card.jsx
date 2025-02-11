import React from "react";



const Card = (props) => {
  return(
    <div className=" m-7 bg-white rounded-lg shadow-lg p-6 max-w-sm w-72 mx-auto">
    <img 
      src="https://via.placeholder.com/150"
      alt="Profile Picture" 
      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
    <h1 className="text-2xl font-semibold text-gray-800 text-center">{props.username}</h1>
    <h2 className="text-lg text-gray-600 text-center ">{props.city},{props.age}</h2>
    <h2 className="text-green-600 text-center mb-2">{props.proff}</h2>
   <button className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition">
    Add Friend
   </button>
</div>
  )  
}

export default Card