import './App.css';
import { useState } from 'react';

function App() {
  const [value, setValue] = useState(0);

  const incrementValue = () =>{
    setValue(prevValue => prevValue+1);
  }

  const decrementValue = () =>{
    setValue(prevValue => prevValue-1);
  }

  return (
    <>
      <h1>Simple counter</h1>
      <h2>{value}</h2>
      <div className="buttons">
        <button onClick={()=>{decrementValue()}}>Decrement</button>
        <button onClick={()=>{incrementValue()}}>Increment</button>
      </div>
    </>
  );
}

export default App;
