import { Formik, Field, Form, useFormikContext } from 'formik';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import CreatableSelect from 'react-select/creatable';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

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
        gridTemplateColumns: 'repeat(, 25ch)',
        gap: '0 50px',
    },
}));

export default function SellerInfo(props) {
    const classes = useStyles();
    const options = [];

    return (
        <div>
            <Formik
                initialValues={
                    props.formValues.sellerInfo || {
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
                            name="seller"
                            label="Seller Name"
                            variant="outlined"
                            type="input"
                            as={TextField}
                        />
                        <Field
                            required
                            error={true}
                            helperText="Required"
                            name="description"
                            placeholder="Description..."
                            variant="outlined"
                            rowsMin={3}
                            type="input"
                            as={TextareaAutosize}
                        />
                        <UpdateFormState
                            form="sellerInfo"
                            handleFormChange={props.handleFormChange}
                        />
                    </Form>
                )}
            </Formik>
        </div>
    );
}
