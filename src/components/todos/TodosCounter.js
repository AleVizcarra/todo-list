import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import '../../todoApp.css';

const TodosCounter = React.memo(({ todosLength }) => {

  console.log('TodosCounter: Me volví a generar');

  return (
    <footer className="todos-footer">
        <p>Saved tasks: { todosLength }</p>
    </footer>
  )
})

export default TodosCounter