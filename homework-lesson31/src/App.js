import { useState } from "react";
import Button from "./components/Button";
import Titlu from "./components/Titlu";

function App() {
  const [counter, setCounter]= useState(0)

  const handleChangeCounter = (option) => {
    setCounter((prevState) => {
      return option === 'INC' ? prevState + 1 : prevState -1})}

    return (
    <div>
      <Titlu titlu='Counter:'></Titlu> 
      <h4 className='counter'>{counter}</h4>

      <div className='buttons-wrapper'>
      <Button action={()=>{handleChangeCounter('INC')}}>Increment</Button>
      <Button action={()=>{handleChangeCounter()}}>Decrement</Button>
      
      </div>
    </div>


  );
}

export default App;
