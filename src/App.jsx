import React, {useState} from 'react'

const App = () => {
  const [count, setCount]  = useState(20);

    function increment (){
      setCount(count+1)
    }
  return (    
    <div>
      <center>  
          <h3>{count}</h3>
           <button onClick={increment}>Change.!</button>
      </center>
    </div>
  )
}

export default App
