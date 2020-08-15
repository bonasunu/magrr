import React, { useState } from 'react';
import axios from 'axios'

const App = () => {
  const [advice, setAdvice] = useState('')

  const vibe = () => {
    axios
      .get('https://api.adviceslip.com/advice')
      .then(response => {
        setAdvice(response.data.slip.advice)
      })
  }

  return (
    <div className="App">
      <h1>Maggr</h1>
      <button onClick={vibe}>Check</button>
      {advice}
    </div>
  );
}

export default App;
