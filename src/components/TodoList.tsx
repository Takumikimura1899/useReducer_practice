import React, { useState } from 'react';

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
