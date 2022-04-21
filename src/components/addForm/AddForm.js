import { useContext, memo } from 'react';
import { actionTypes } from '../../actionTypes/actionTypes';
import { GlobalContext } from '../../context/GlobalContext';
import { useForm } from '../../hooks/useForm';
import '../../todoApp.css';

const AddForm = () => {

    console.log('AddForm: Me volví a generar');
    
    const { dispatch } = useContext(GlobalContext);

    const [{ task }, handleInputChange, reset] = useForm({
        task: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const newTask = {
            id: new Date().getTime(),
            task,
            done: false,
        };

        dispatch({
            type: actionTypes.addTodo,
            payload: newTask
        });

        reset();
    };

  return (
    <form onSubmit={handleSubmit}>
        <div className='form-container'>
            <div className='input-container'>
                <input
                    type="text"
                    id='task'
                    placeholder='Add ToDo'
                    autoComplete='off'
                    name='task'
                    value={ task }
                    onChange={ handleInputChange }
                    required
                />

                <button type='submit'>
                    <svg className="plus-icon" width="24" height="24" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 12H12M18 12H12M12 12V6M12 12V18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>

            </div>
        </div>
    </form>
  )
}

export default AddForm