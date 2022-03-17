import React, { useReducer } from 'react';

type State = {
  count: number;
};

export const Counter = () => {
  const initialState: State = {
    count: 0,
  };

  const reducer = (state: State, action: string) => {
    if (action === 'INCREMENT') {
      return { count: state.count + 1 };
    } else {
      return { count: state.count - 1 };
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <div>
        <h1>Counter</h1>
        <h2>カウント: {state.count}</h2>
        <button onClick={() => dispatch('INCREMENT')}>+</button>
        <button onClick={() => dispatch('DECREMENT')}>-</button>
      </div>
    </>
  );
};
function reducer(reducer: any, initialState: any): [any, any] {
  throw new Error('Function not implemented.');
}
