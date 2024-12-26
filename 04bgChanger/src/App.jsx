import { useState } from "react"


function App() {
  const[color,setcolor]=useState("#6B8E23")

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
    <div className="fixed inset-x-0 bottom-12 flex justify-center items-center px-2">
    <div className="flex justify-center items-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
      
      <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg
      "style={{backgroundColor:"red"}}
      onClick={()=>setcolor("red")}>Red</button>

      <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg
      "style={{backgroundColor:"green"}}
      onClick={()=>setcolor("green")}>green</button>

      <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg
      "style={{backgroundColor:"Crimson"}}
      onClick={()=>setcolor("Crimson")}>Crimson</button>

      <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg
      "style={{backgroundColor:"Turquoise"}}
      onClick={()=>setcolor("Turquoise")}>Turquoise</button>

      <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg
      "style={{backgroundColor:"Goldenrod"}}
      onClick={()=>setcolor("Goldenrod")}>Goldenrod</button>

      <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg
      "style={{backgroundColor:"Teal"}}
      onClick={()=>setcolor("Teal")}>Teal</button>

    </div>
  </div>
</div>
  )
}

export default App
