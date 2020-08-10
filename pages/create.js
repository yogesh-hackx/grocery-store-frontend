import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import BasicDetails from '../Components/CreateProduct/BasicDetails';
import AboutProduct from '../Components/CreateProduct/AboutProduct';
import AddImages from '../Components/CreateProduct/AddImages';
import SellerInfo from '../Components/CreateProduct/SellerInfo';
import { Box } from '@material-ui/core';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    button: {
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    actionsContainer: {
        marginBottom: theme.spacing(2),
    },
    resetContainer: {
        padding: theme.spacing(3),
    },
}));

function getSteps() {
    return [
        'Product Details',
        'About Product',
        'Add Images',
        'Seller Info',
        'Finish!',
    ];
}

const formValues = {};

function getStepContent(step, handleFormChange, formValues) {
    switch (step) {
        case 0:
            return (
                <BasicDetails
                    formValues={formValues}
                    handleFormChange={handleFormChange}
                />
            );
        case 1:
            return (
                <AboutProduct
                    formValues={formValues}
                    handleFormChange={handleFormChange}
                />
            );
        case 2:
            return (
                <AddImages
                    formValues={formValues}
                    handleFormChange={handleFormChange}
                />
            );
        case 3:
            return (
                <SellerInfo
                    formValues={formValues}
                    handleFormChange={handleFormChange}
                />
            );
        case 4:
            return '🎉 🎉 🎉';
        default:
            return 'Unknown step';
    }
}

export default function VerticalLinearStepper() {
    // TODO: Add Form Validation
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [formValues, setFormValues] = React.useState({
        basicDetails: {},
        aboutProduct: {},
        addImages: {},
        sellerInfo: {},
    });

    const handleFormChange = (newValues) => {
        setFormValues({ ...formValues, ...newValues });
        console.log(formValues);
    };

    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSubmit = async () => {
        const payload = {
            ...formValues.basicDetails,
            quantityAvailable: formValues.basicDetails.quantityAvailable.map(
                (val) => val.value,
            ),
            tags: formValues.basicDetails.tags.map((val) => val.label),
            productDetails: {
                ...formValues.aboutProduct,
                seller: { ...formValues.sellerInfo },
                images: {
                    ...formValues.addImages,
                    extraImages: Object.values(
                        formValues.addImages.extraImages,
                    ),
                },
            },
        };

        try {
            const response = await axios.post(
                'https://grocery-store-backend.vercel.app/api/v1/products/add',
                payload,
            );
            console.log('Success!');
        } catch (error) {
            console.log(error);
            // return;
        }

        console.log(payload);
    };

    return (
        <div className={classes.root}>
            <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((label, index) => (
                    <Step key={label}>
                        <StepLabel
                            onClick={() => setActiveStep(index)}
                            style={{ cursor: 'pointer', userSelect: 'none' }}
                        >
                            {label}
                        </StepLabel>
                        <StepContent>
                            <Box>
                                {getStepContent(
                                    index,
                                    handleFormChange,
                                    formValues,
                                )}
                            </Box>
                            <div className={classes.actionsContainer}>
                                <div>
                                    <Button
                                        disabled={activeStep === 0}
                                        onClick={handleBack}
                                        className={classes.button}
                                    >
                                        Back
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={handleNext}
                                        className={classes.button}
                                    >
                                        {activeStep === steps.length - 1
                                            ? 'Finish'
                                            : 'Next'}
                                    </Button>
                                </div>
                            </div>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
            {activeStep === steps.length && (
                <Paper square elevation={0} className={classes.resetContainer}>
                    <Typography>Ready to create a new product!</Typography>
                    <Button onClick={handleSubmit} className={classes.button}>
                        Submit
                    </Button>
                </Paper>
            )}
        </div>
    );
}
