import React, { useState } from 'react';
import './App.css';

function App() {
  const [windowPrevState, setWindowPrevState] = useState([]);
  const [windowCurrState, setWindowCurrState] = useState([]);
  const [numbers, setNumbers] = useState([]);
  const [average, setAverage] = useState(null);

  // Mock response data for testing
  const mockResponseData = {
    'p': {
      windowPrevState: [],
      windowCurrState: [2, 3, 5, 7],
      numbers: [2, 3, 5, 7],
      avg: 4.25
    },
    'f': {
      windowPrevState: [],
      windowCurrState: [0, 1, 1, 2, 3, 5],
      numbers: [0, 1, 1, 2, 3, 5],
      avg: 2
    },
    'e': {
      windowPrevState: [],
      windowCurrState: [2, 4, 6, 8],
      numbers: [2, 4, 6, 8],
      avg: 5
    },
    'r': {
      windowPrevState: [],
      windowCurrState: [1, 2, 3, 4, 5],
      numbers: [1, 2, 3, 4, 5],
      avg: 3
    }
  };

  const fetchNumbers = async (numberType) => {
    // Simulate fetching data from the mock response
    const responseData = mockResponseData[numberType];
    if (responseData) {
      setWindowPrevState(responseData.windowPrevState);
      setWindowCurrState(responseData.windowCurrState);
      setNumbers(responseData.numbers);
      setAverage(responseData.avg);
    }
  };

  return (
    <div className="App">
      <h1>Average Calculator</h1>
      <div className="buttons-container">
        <button className="button-prime" onClick={() => fetchNumbers('p')}>Fetch Prime Numbers</button>
        <button className="button-fibonacci" onClick={() => fetchNumbers('f')}>Fetch Fibonacci Numbers</button>
        <button className="button-even" onClick={() => fetchNumbers('e')}>Fetch Even Numbers</button>
        <button className="button-random" onClick={() => fetchNumbers('r')}>Fetch Random Numbers</button>
      </div>
      <div className="tile">
        <h2>Previous Window State: [{windowPrevState.join(', ')}]</h2>
      </div>
      <div className="tile">
        <h2>Current Window State: [{windowCurrState.join(', ')}]</h2>
      </div>
      <div className="tile">
        <h2>Numbers: [{numbers.join(', ')}]</h2>
      </div>
      {average && 
        <div className="tile">
          <h2>Average: {average.toFixed(2)}</h2>
        </div>
      }
    </div>
  );
}

export default App;
