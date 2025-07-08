import { useState } from 'react'


function App() {
  return( 
    <div style={{background: '#dfe6e9', height: "100vh"}}>
      <ToogleMessage/>
    </div>
  )
}

const ToogleMessage = () => {
  let [isvisible, setIsVisible] = useState(true); // defining a new state variable 
  
  function toggle(){
    setIsVisible(!isvisible);
  }

  return(
    <div>
      <button onClick={toggle}>
        Toogle Message
      </button>
      {isvisible && <p>Hello my name is Jay</p>}
    </div>
  )
}

export default App



// Notificatifion count code

// import { useState } from "react";

// function App() {
//   return (
//     <div style={{background: "#dfe6e9", height: "100vh" }}>
//       <ToggleMessage />
//       <ToggleMessage />
//       <ToggleMessage />
//     </div>
//   )
// }

// // the component isnt re-rendering
// // because we havent used a state variable

// const ToggleMessage = () => {
//   let [notificationCount, setNotificationCount] = useState(0);

//   console.log("re-render");
//   function increment() {
//     setNotificationCount(notificationCount + 1);
//   }

//   return (
//       <div>
//           <button onClick={increment}>
//               Increase count
//           </button>
//           {notificationCount}
//       </div>
//   );
// };

