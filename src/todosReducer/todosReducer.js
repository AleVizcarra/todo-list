import { actionTypes } from "../actionTypes/actionTypes";

export const todosReducer = (state = {}, action) => {


    switch(action.type) {
        case actionTypes.addTodo:
            return [...state, action.payload];

        case actionTypes.updateTodo:
            return state.map((task) => (task.id === action.payload.id) ? (
                {
                    ...task, 
                    done: action.payload.done,
                }
            ) : (
                task
            ));

        case actionTypes.deleteTodo:
            return state.filter((task) => task.id !== action.payload);
        
        default:
            return state;
    }
};