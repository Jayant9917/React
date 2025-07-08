import React from 'react'


//  Side Effect => this render the setInterval function again and again 
const App = () => {
  const[count, setCount] = useState(0);

  function increment(){
    setCount(count + 1);
  }

  setInterval(increment, 2000);

  return (
    <div>
      {count}
    </div>
  )
}

export default App
