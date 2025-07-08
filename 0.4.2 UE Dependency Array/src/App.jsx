import { useEffect, useState } from 'react'

function App() {
  const [count, setCount] = useState(1);
  const [count2, setCount2] = useState(1);

  function increaseCount(){
    setCount(currentValue => currentValue + 1);
  }

  function decreaseCount(){
    setCount2(currentValue => currentValue -1);
  }

  useEffect(() => {
    setInterval(increaseCount, 5000);
    setInterval(decreaseCount, 8000);
  }, [])


  // DEPENDENCY ARRAY PASSED AS SECOND ARGUMENT
  useEffect(() => {
    console.log("the count has been updated to", + count);
  },[count]);

  return (
    <div>
      {count} {count2} 
    </div>
  )
}

export default App
