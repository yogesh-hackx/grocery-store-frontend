import { Formik, Field, Form, useFormikContext } from 'formik';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
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

export default function AboutProduct(props) {
    const classes = useStyles();
    const options = [];

    return (
        <div>
            <Formik
                initialValues={
                    props.formValues.aboutProduct || {
                        name: '',
                        MRP: '',
                        sellingPrice: '',
                        quantity: '',
                        tags: [],
                    }
                }
                onSubmit={(data) => console.log(data)}
            >
                {({ setFieldValue }) => (
                    <Form className={`${classes.root} ${classes.form}`}>
                        <Field
                            name="nutrientValue"
                            placeholder="Nutrient value & benefits..."
                            variant="outlined"
                            rowsMin={3}
                            type="input"
                            as={TextareaAutosize}
                        />
                        <Field
                            name="shelfLife"
                            placeholder="Shelf Life..."
                            variant="outlined"
                            rowsMin={3}
                            type="input"
                            as={TextareaAutosize}
                        />
                        <Field
                            name="storageTips"
                            placeholder="Storage Tips..."
                            variant="outlined"
                            rowsMin={3}
                            type="input"
                            as={TextareaAutosize}
                        />
                        {/* <Field
                            required
                            error={true}
                            helperText="Required"
                            name="description"
                            placeholder="Description..."
                            variant="outlined"
                            rowsMin={3}
                            type="input"
                            as={TextareaAutosize}
                        /> */}
                        <UpdateFormState
                            form="aboutProduct"
                            handleFormChange={props.handleFormChange}
                        />
                    </Form>
                )}
            </Formik>
        </div>
    );
}
