import { useState } from "react"

export const useForm = (initialState = {}) => {

    const [formValue, setformValue] = useState(initialState);

    const handleInputChange = ({ target }) => {
        setformValue({
            [target.name]: target.value,
        });
    };

    const reset = () => {
        setformValue(initialState);
    }

    return [formValue, handleInputChange, reset];
};