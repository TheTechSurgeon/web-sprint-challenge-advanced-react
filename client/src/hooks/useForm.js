// write your custom hook here to control your checkout form
import { useState } from 'react';

const useForm = (handleSubmitCallback, validateCallback, initialValues) => {
    const [form, setForm] = useState(initialValues); 

    const [submitting, setSubmitting] = useState(false); 
   
    

    
    const handleChange = e => {
        const { name, value } = e.target; 
        setForm(state => {
            return { ...state, [name]: value };
        });
    };
    
    const handleSubmit = async e => {
        setSubmitting(true);
      

        if (Object.keys(err).length === 0) {
            
            setSubmitting(false);
            console.log('no errors.');
        } else {
            setSubmitting(false);
            
        }
    };

    return {
        handleChange,
        
        handleSubmit,
        setForm,
        form,
        errors,
        submitting,
    };
};
export default useForm;


