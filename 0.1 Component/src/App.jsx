import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // Props => we change change the state of the component
  return (
    <div style={{backgroundColor: '#95a5a6', height: '100vh'}}>
      <div style={{display: "flex", justifyContent: "center"}}>
        <div>
          <div>
            <PostComponent></PostComponent>
            <br/>
          </div>
          <div>
            <PostComponent></PostComponent>
          <br/>
          </div>
          <div>
            <PostComponent></PostComponent>
          <br/>
          </div>
        </div> 
      </div>
    </div>
  )
}

// Creating a component 
function PostComponent(){
  // Strick styling
  return <div style ={{width: 200, backgroundColor: 'white', borderRadius : 10, borderColor: 'gray',borderWidth: 1, padding: 20}}>
  <div style={{display: 'flex'}}>
    <img src={"https://picsum.photos/200/200"} alt="picsum"  style={{width:40, height:40, borderRadius: 20, marginRight: 10}}/>
  <div style = {{fontSize:12}}>
  <b>Jay Rana</b>
  <div>23,777 followers </div>
  <div>12m</div>
  </div>
  </div>
  <div style={{fontSize: 14, fontWeight: 500, marginTop: 10}}>
    check out my github profile and you will see whats happening and how it is happening
  </div>
  </div>
  
}

export default App
