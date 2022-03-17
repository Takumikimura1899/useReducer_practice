import { useReducer, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Counter } from './components/Counter';

function App() {
  const [count, setCount] = useState(0);

  const test = [10, 20, 30];

  const sum = test.reduce((previousValue, currentValue) => {
    console.log(previousValue, currentValue);

    return previousValue + currentValue;
  }, 100);

  type User = {
    name: string;
    email: string;
  };

  const users: User[] = [
    { name: 'john', email: 'john@example.com' },
    { name: 'ken', email: 'ken@example.com' },
    { name: 'david', email: 'david@example.com' },
  ];

  const mailAddresses = users.reduce(
    (previousValue: any[], currentValue: User): User[] => {
      return previousValue.concat(currentValue.email);
    },
    []
  );

  console.log(mailAddresses);

  return (
    <div className='App'>
      <p>{sum}</p>
      <Counter />
    </div>
  );
}

export default App;
