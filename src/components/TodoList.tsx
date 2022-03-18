import React, { useReducer, useState } from 'react';

type State = {
  id: string;
  text: string;
};

type Action = {
  type: 'ADD' | 'DELETE';
  text?: string;
  id?: string;
};

const reducer = (state: State[], action: Action): State[] => {
  switch (action.type) {
    case 'ADD':
      return [
        ...state,
        { id: String(state.slice(-1)[0].id + 1), text: action.text! },
      ];
    case 'DELETE':
      console.log(state);
      console.log(action.id);

      return state.filter((todo) => {
        todo.id === action.id;
      });
  }
};

const initialState: State[] = [{ id: '0', text: '最初のTodo' }];

export const TodoList = () => {
  const [text, setText] = useState<string>('test');
  //   const TodoList = [
  //     {
  //       id: 1,
  //       text: 'test',
  //     },
  //     {
  //       id: 2,
  //       text: 'test2',
  //     },
  //   ];
  const [TodoList, dispatch] = useReducer(reducer, initialState);

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
      <button onClick={() => dispatch({ type: 'ADD', text })}>Add Todo</button>
      <ul>
        {TodoList.map((todo) => (
          <li key={todo.id} id={String(todo.id)}>
            {todo.text}
            <button onClick={() => dispatch({ type: 'DELETE', id: '0' })}>
              削除
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
