import { useEffect, useReducer, useState } from 'react';
import AddForm from './components/addForm/AddForm';
import Header from './components/header/Header';
import TodoListContainer from './components/todos/TodoListContainer';
import TodosCounter from './components/todos/TodosCounter';
import { GlobalContext } from './context/GlobalContext';
import './todoApp.css';
import { todosReducer } from './todosReducer/todosReducer';

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) ?? [];
}

const TodoApp = () => {

  const [addFormIsShown, setAddFormIsShown] = useState(false);

  const [todos, dispatch] = useReducer(todosReducer, {}, init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <main className="main-container">
        <GlobalContext.Provider value={{
          dispatch,
        }}>
          <Header
            addFormIsShown={ addFormIsShown }
            setAddFormIsShown={ setAddFormIsShown }
          />
          {
            (addFormIsShown) &&  <AddForm />
          }

          <TodoListContainer 
            todos= { todos }
            dispatch={ dispatch }
          />

          <TodosCounter 
            todosLength= { todos.length }
          />
        </GlobalContext.Provider>
    </main>
  )
}

export default TodoApp