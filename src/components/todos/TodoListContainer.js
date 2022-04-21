import { memo } from 'react';
import '../../todoApp.css';
import TodoItem from './TodoItem';

const TodoListContainer = memo(({ todos }) => {

    console.log('TodoListContainer: Me volví a generar');
  return (
    <section className='todos-section'>

        {
            (todos.length === 0) ? (
                <h3>No hay tareas registradas</h3>
            ) : (
                <div className='todos-container'>
                    {
                        todos.map((todo) => (
                            <TodoItem 
                                key={todo.id}
                                {...todo}
                            />
                        ))
                    }
                </div>
            )
        }
    </section>
  )
})

export default TodoListContainer