import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <h1 className='bg-red-500'>React + React</h1>
      <div className="join">
        <input className="input input-bordered join-item" placeholder="Email" />
        <button className="btn join-item rounded-r-full">Subscribe</button>
      </div>
    </>
  )
}

export default App
