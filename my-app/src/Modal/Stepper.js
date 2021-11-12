import React, {useState} from "react";
import {Button, Grid, TextField} from "@mui/material";
import StepWrapper from "./StepWrapper";
import {useInput} from "../hook/useInput";

const ModalStepper = () => {

    const title = useInput('')
    const body = useInput('')


    const [activeStep, setActiveStep] = useState(0)
    const data = {
        'title': title.value,
        'body': body.value
    }
    const next = () => {
        setActiveStep((prev) => prev + 1)
        // if (activeStep !== 2) {
        //
        // } else {

            // axios.post('https://simple-blog-api.crew.red/posts/', data)
            //     .then(resp => router.push('/'))
            //     .catch(e => console.log(e))
        // }


    }
    const back = () => {
        setActiveStep((prev) => prev - 1)
    }

    return (
        <div>
            <StepWrapper activeStep={activeStep}>

                {activeStep === 0 &&
                <Grid container direction={'column'} style={{padding: 20}}>
                    <TextField
                        style={{marginTop: 10}}
                        label={'Title'}
                        {...title}
                    />
                    <TextField
                        style={{marginTop: 10}}
                        label={'Body'}
                        {...body}
                    />
                </Grid>
                }
                {activeStep == 1 &&
                <TextField
                    style={{marginTop: 10}}
                    label={'Body'}
                    {...body}
                />
                }
                {
                    activeStep === 2 &&
                    <Grid container direction={'column'} style={{padding: 20}}>
                        <TextField
                            style={{marginTop: 10}}
                            label={'Title'}
                        />
                        <TextField
                            style={{marginTop: 10}}
                            label={'Text for blog'}
                            fullWidth
                            multiline
                            rows={10}
                        />
                    </Grid>

                }

            </StepWrapper>
            <Grid container justifyContent={'space-between'}>
                <Button disabled={activeStep === 0} onClick={back}>Back</Button>
                <Button onClick={next}>Next</Button>
            </Grid>
        </div>

    )
};

export default ModalStepper