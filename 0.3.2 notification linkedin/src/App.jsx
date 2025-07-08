import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(1);

  function increaseCount(){
    setCount(count + 1);
  }
  return ( 
  <div>
      <div style={{background: "red", boarderRadius: 0, width:20, height: 25, paddingLeft: 10, paddingTop: 5}}>
        {count}
      </div>
    <img style={{cursor: "pointer"}} src={reactLogo} alt="react" onClick={increaseCount}/>
  </div>
  )
}

export default App
