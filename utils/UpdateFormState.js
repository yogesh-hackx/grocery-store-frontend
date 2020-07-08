import { useFormikContext } from 'formik';
import { useEffect } from 'react';

export default function UpdateFormState({ form, handleFormChange }) {
    const { values } = useFormikContext();
    useEffect(() => {
        handleFormChange({
            [form]: values,
        });
    }, [values]);
    return null;
}
