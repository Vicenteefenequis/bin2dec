import React, { useState } from 'react';

import './App.css';

function App() {

  const [numBinary, setnumBinary] = useState('');
  const [numDec, setnumDec] = useState('');


  const onFormSubmit = e => {
    e.preventDefault();

    const reservarBinary = numBinary
      .split('')
      .map(Number)
      .reverse()

    const result = reservarBinary.reduce(
      (accumulator, currentValue, idx) =>
        accumulator + currentValue * Math.pow(2, idx)
    )
    setnumDec(result)
  }

  return (
    <>
      <div className="container"> 
     
        <form onSubmit={onFormSubmit}>
        <h1>Binary to Decimal</h1>
        <label>Binary Input</label>
          <input
            type="text"
            placeholder="Entre com 0 ou 1"
            required
            pattern="[0-1]+$"
            value={numBinary}
            onChange={e => { setnumBinary(e.target.value) }}
          />
          <button type="submit">Convert</button>
          <label>Decimal Output</label>
          <input
            value={numDec}
            type="text"
            disabled
          />
        </form>
      </div>
    </>
  )
}

export default App;
