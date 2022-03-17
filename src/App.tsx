import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const test = [10, 20, 30];

  const sum = test.reduce((previousValue, currentValue) => {
    console.log(previousValue, currentValue);

    return previousValue + currentValue;
  }, 100);

  return (
    <div className='App'>
      <p>{sum}</p>
    </div>
  );
}

export default App;
