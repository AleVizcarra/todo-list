import { useContext, useState } from 'react';
import { actionTypes } from '../../actionTypes/actionTypes';
import { GlobalContext } from '../../context/GlobalContext';
import '../../todoApp.css';

const TodoItem = ({ id, task, done }) => {

  const { dispatch } = useContext(GlobalContext);

  const handleDelete = ( taskId ) => {
    dispatch({
      type: actionTypes.deleteTodo,
      payload: taskId,
    });
  };

  const handleTaskState = ({ target }) => {

    dispatch({
      type: actionTypes.updateTodo,
      payload: {
        id,
        done: target.checked,
      }
    });
  };

  return (
    <div className="todo-item">

        <label className={ `todo-label ${done && 'todo-label-checked'}` } htmlFor={ id }>
            <input 
                type="checkbox" 
                name= { id }
                id={ id }
                checked = { done }
                onChange = { handleTaskState } 
            />
            { task }
        
        </label>

        <button 
          className='eliminar-btn'
          onClick={ () => handleDelete(id) }
        >
          <svg width="24" height="24" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 12H18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
    </div>
  )
}

export default TodoItem