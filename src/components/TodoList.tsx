import React, { useState } from 'react';

type Todo = {
  value: string;
  readonly id: number;
};

export const TodoList = () => {
  const [text, setText] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([{ value: 'test', id: 0 }]);

  const handleOnSubmit = () => {
    if (!text) return;
    const newTodo: Todo = {
      value: text,
      id: new Date().getTime(),
    };
    // console.log('formから送信されたよ');

    setTodos([...todos, newTodo]);
    setText('');
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
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
        <input type='text' value={text} onChange={(e) => handleOnChange(e)} />
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
        {todos.map((todo) => (
          <p key={todo.id}>{todo.value}</p>
        ))}
      </div>
    </>
  );
};
