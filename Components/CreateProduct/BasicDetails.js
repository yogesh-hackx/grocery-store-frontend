import { Formik, Field, Form, useFormikContext } from 'formik';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import CreatableSelect from 'react-select/creatable';

import UpdateFormState from '../../utils/UpdateFormState';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },

    form: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 25ch)',
        gap: '0 50px',
    },
}));

export default function BasicDetails(props) {
    const classes = useStyles();
    const options = [];

    return (
        <div>
            <Formik
                initialValues={
                    props.formValues.basicDetails || {
                        name: '',
                        MRP: '',
                        sellingPrice: '',
                        quantityAvailable: '',
                        tags: [],
                    }
                }
                onSubmit={(data) => console.log(data)}
            >
                {({ setFieldValue }) => (
                    <Form className={`${classes.root} ${classes.form}`}>
                        <Field
                            name="name"
                            label="Item name"
                            variant="outlined"
                            type="input"
                            as={TextField}
                        />
                        <Field
                            name="MRP"
                            label="MRP"
                            variant="outlined"
                            type="input"
                            as={TextField}
                        />
                        <Field
                            name="sellingPrice"
                            label="Selling Price"
                            variant="outlined"
                            type="input"
                            as={TextField}
                        />
                        <Field
                            name="quantityAvailable"
                            placeholder="Quantity Available"
                            instanceId="quantityAvailable"
                            isClearable
                            isMulti
                            as={CreatableSelect}
                            type="input"
                            components={{
                                DropdownIndicator: () => null,
                                IndicatorSeparator: () => null,
                                Menu: () => null,
                            }}
                            onChange={(option) => {
                                setFieldValue('quantityAvailable', option);
                            }}
                        />
                        <Field
                            name="tags"
                            placeholder="Tags..."
                            instanceId="tags"
                            isClearable
                            isMulti
                            as={CreatableSelect}
                            type="input"
                            options={options}
                            onChange={(option) => {
                                setFieldValue('tags', option);
                            }}
                        />
                        <UpdateFormState
                            form="basicDetails"
                            handleFormChange={props.handleFormChange}
                        />
                    </Form>
                )}
            </Formik>
        </div>
    );
}
