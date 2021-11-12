import React from "react";
import {Box, Button, Card, Container, Grid, Step, StepLabel, Stepper} from "@mui/material";



const steps = ['Введите данные пользователя', 'Выберите адрес', 'Привяхка к пользователя']

const StepWrapper = ({activeStep, children}) => {

    return (
        <>
            <Container>
                <Stepper activeStep={activeStep}>
                    {steps.map((step,index) =>
                        <Step
                            key={index}
                            completed={activeStep > index}
                        >
                            <StepLabel>{step}</StepLabel>
                        </Step>
                    )}
                </Stepper>
                <Grid container justifyContent={'center'} sx={{margin: '70px 0', height: 270}}>
                    <Card style={{width: 600}}>
                        {children}
                    </Card>
                </Grid>
            </Container>
        </>
    )
}

export default StepWrapper;