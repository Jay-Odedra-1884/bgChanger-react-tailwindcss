import { useState } from 'react'
function App() {
  const [color, setColor] = useState("black")

  return (
    <>
      <div className='w-full h-screen text-black flex justify-center'
      style={{backgroundColor:color}}>
        <div className='flex justify-center flex-wrap gap-3 fixed bottom-0 bg-white px-5 py-3 rounded-lg'>
          
            <button className='text-white outline-none rounded-3xl px-5 py-1' style={{backgroundColor: "red"}} onClick={() => setColor("red")}>Red</button>
            <button className='text-white outline-none rounded-3xl px-5 py-1' style={{backgroundColor: "green"}} onClick={() => setColor("green")}>Green</button>
            <button className='text-white outline-none rounded-3xl px-5 py-1' style={{backgroundColor: "blue"}} onClick={() => setColor("blue")}>Blue</button>
            <button className='text-white outline-none rounded-3xl px-5 py-1' style={{backgroundColor: "yellow"}} onClick={() => setColor("yellow")}>Yellow</button>
            <button className='text-white outline-none rounded-3xl px-5 py-1' style={{backgroundColor: "cyan"}} onClick={() => setColor("cyan")}>Cyan</button>

        </div>
      </div>
    </>
  )
}

export default App
