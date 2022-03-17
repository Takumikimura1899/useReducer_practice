import React, { useReducer } from 'react';

type State = {
  count: number;
};

type Action = {
  type: string;
  payload: number;
};

export const Counter = () => {
  const initialState: State = {
    count: 0,
  };

  const reducer = (state: State, action: Action) => {
    // if (action === 'INCREMENT') {
    //   return { count: state.count + 1 };
    // } else {
    //   return { count: state.count - 1 };
    // }
    switch (action.type) {
      case 'INCREMENT':
        return { count: state.count + action.payload };
      case 'DECREMENT':
        return { count: state.count - action.payload };
      case 'DOUBLE_INCREMENT':
        return { count: state.count * 2 };
      case 'RESET':
        return { count: 0 };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <div>
        <h1>Counter</h1>
        <h2>カウント: {state.count}</h2>
        <button onClick={() => dispatch({ type: 'INCREMENT', payload: 5 })}>
          +
        </button>
        <button onClick={() => dispatch({ type: 'INCREMENT', payload: 5 })}>
          -
        </button>
        {/* <button onClick={() => dispatch('DOUBLE_INCREMENT')}>*</button>
        <button onClick={() => dispatch('RESET')}>RESET</button> */}
      </div>
    </>
  );
};
