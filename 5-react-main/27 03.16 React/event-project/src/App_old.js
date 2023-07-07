import { useState } from 'react'
import './App.css';

function App() {
  const [number, setNumber] = useState(0)

  const incrementar = (e) => {
    console.log(e)
    setNumber(number => number += 1)
  }

  return (
    <div className="App">
      <p className='number'>{number}</p>
      <p onClick={console.log}>
      <button onClick={incrementar}>+</button>
      <button onClick={() => setNumber(number => number -= 1)}>-</button>
      </p>
    </div>
  );
}

export default App;

// React.createElement('h1', { className: 'hola' }, 'Hola mundo')