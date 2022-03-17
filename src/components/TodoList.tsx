import React, { useState } from 'react';

type State = {
  id: number;
  text: string;
};

type Action = {
  type: 'ADD';
  text: string;
};

const reducer = (state: State[], action: Action): State[] => {
  switch (action.type) {
    case 'ADD':
      return [...state, { id: state.slice(-1)[0].id + 1, text: action.text }];
  }
};

export const TodoList = () => {
  const [text, setText] = useState<string>('test');
  const TodoList = [
    {
      id: 1,
      text: 'test',
    },
    {
      id: 2,
      text: 'test2',
    },
  ];
  //   const [state, dispatch] = useReducer(first, second, third)

  return (
    <div>
      <label>
        todo :
        <input
          type='text'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </label>
      <button>Add Todo</button>
      <ul>
        {TodoList.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};
