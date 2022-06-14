import React from "react";
import './App.css';

function Todo ( { todo, index, removeTodo, completeTodo } ){
  return(
    <div 
      className="todo"
      style={{ textDecoration: todo.isComplited ? 'line-through' : ''}}
    >
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}> Complite </button>
        <button onClick={() => removeTodo(index)}> X </button>
      </div>
    </div>
  );
}


function TodoForm ( { addTodo } ){
  const [ value, setValue ] = React.useState('');

  const handleSubmit = event => {
    event.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  }

  return(
    <form onSubmit={handleSubmit}>
      <input 
        placeholder='Todos...'
        type='text'
        value={value}
        onChange={ e => setValue(e.target.value)}
      />
    </form>
  );
}


function App () {
  const [ todos, setTodos ] = React.useState([
    {
      text: 'React',
      isComplited: false,
    },
    {
      text: 'React',
      isComplited: false,
    },
    {
      text: 'React',
      isComplited: false,
    },
  ])

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  } 

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  const completeTodo = index => {
    const newTodos= [...todos];
    newTodos[index].isComplited = true;
    setTodos(newTodos);
  }


  return(
    <div className="app">
      <h1>Todo</h1>
      <div className="todo-list">
        {todos.map(( todo, index ) => (
          <Todo 
            index={index}
            key={index}
            todo={todo}
            removeTodo={removeTodo}
            completeTodo={completeTodo}
          />
        ))}
        <TodoForm 
          addTodo={addTodo}
        />
      </div>
    </div>
  );
}


export default App;
