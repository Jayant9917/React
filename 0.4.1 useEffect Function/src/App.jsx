import { useState, useEffect} from 'react'

function App() {
  const [count, setCount] = useState(0)

  function increaseCount(){
    setCount(function(currentValue){
      return currentValue + 1;
    })
  }
  // ANOTHER WAY TO WRITE A FUNCTION
  // setCount(currentValue => currentValue + 1);

  useEffect(() => {
    console.log("above setInterval")
    setInterval(increaseCount, 1000);
  },[]);

  return (

    <div>
      {count}
    </div>
  )
}

export default App
