import React, { useState } from 'react';

type Todo = {
  value: string;
};

export const TodoList = () => {
  const [text, setText] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([{ value: 'test' }]);

  const handleOnSubmit = () => {
    if (!text) return;
    const newTodo: Todo = {
      value: text,
    };

    setTodos([...todos, newTodo]);
    setText('');
  };

  return (
    <>
      <form
        action=''
        onSubmit={(e) => {
          e.preventDefault();
          handleOnSubmit();
          console.log('送信されたよ');
        }}
      >
        <input
          type='text'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          type='submit'
          // onClick={() => {
          //   console.log('追加ボタンが押されたよ');
          //   handleOnSubmit();
          // }}
          onSubmit={handleOnSubmit}
        >
          追加
        </button>
      </form>
      <div>
        {todos.map((todo, index) => (
          <p key={index}>{todo.value}</p>
        ))}
      </div>
    </>
  );
};
