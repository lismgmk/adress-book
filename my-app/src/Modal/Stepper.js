import React, {useState} from "react";
import {Alert, Autocomplete, Box, Button, Grid, Snackbar, TextField} from "@mui/material";
import StepWrapper from "./StepWrapper";
import {useInput} from "../hook/useInput";
import {nanoid} from "nanoid";
import {adressAPI} from "../Api";

const ModalStepper = () => {

    const formData = new FormData()


    const name = useInput('')
    const phone = useInput('')
    const email = useInput('')

    const [open, setOpen] = React.useState(false);

    const [activeStep, setActiveStep] = useState(0)
    const [disable, setDisable] = useState(false)

    const [value, setValue] = useState('')

    const [dataAdress, setDataAdress] = useState([])

    const randomNumber = Math.floor(Math.random() * 101)

    const data = {
        'Id': randomNumber,
        'name': name.value,
        'phone': phone.value,
        'email': email.value,
        'BindId': randomNumber
    }
    const next = () => {

        if (activeStep === 0) {
            if (phone.value === '') {
                setOpen(true)
                setDisable(true)
            } else {
                setDisable(false)
                adressAPI.createHousing(data)
                    .then((data) => {
                        formData.append('ClientId', data.data.Id)

                        setActiveStep((prev) => prev + 1)
                        return adressAPI.fetchHosingStock()
                    })
                    .then((data) => {
                        setDataAdress(data.data)
                    })
                    .catch((e) => {
                        console.log(e)
                    })
            }
        }
        if (activeStep === 1) {

        }
        // if (activeStep !== 2) {
        //
        // } else {

        // axios.post('https://simple-blog-api.crew.red/posts/', data)
        //     .then(resp => router.push('/'))
        //     .catch(e => console.log(e))
        // }


    }
    // const back = () => {
    //     setActiveStep((prev) => prev - 1)
    // }
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return
        }
        setOpen(false);
    }

    return (
        <div>
            <StepWrapper activeStep={activeStep}>

                {activeStep === 0 &&
                <Grid container direction={'column'} style={{padding: 20}}>
                    <TextField
                        style={{marginTop: 10}}
                        label={'name'}
                        {...name}
                    />
                    <TextField
                        style={{marginTop: 10}}
                        label={'phone'}
                        {...phone}
                    />
                    <TextField
                        style={{marginTop: 10}}
                        label={'email'}
                        {...email}
                    />
                    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="error" sx={{width: '100%'}}>
                            Введите номер телефона
                        </Alert>
                    </Snackbar>
                    {/*<Snackbar open={open2} autoHideDuration={3000} onClose={handleClose2}>*/}
                    {/*    <Alert onClose={handleClose2} severity="error" sx={{ width: '100%' }}>*/}
                    {/*        Введите номер телефона*/}
                    {/*    </Alert>*/}
                    {/*</Snackbar>*/}
                </Grid>


                }
                {activeStep == 1 &&

                <Autocomplete
                    getOptionLabel={(dataAdress) => dataAdress.streetName || ''}
                    disablePortal
                    onChange={setValue}
                    id="controllable-states-demo"
                    options={dataAdress}
                    sx={{width: 300}}
                    renderOption={(props, option) => (
                        <Box
                            component="li"
                            sx={{mr: 2, flexShrink: 0}}
                            {...props}>
                            {option.streetName}
                        </Box>
                    )}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label='Street'
                        />
                    )}
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
                {/*<Button disabled={activeStep === 0} onClick={back}>Back</Button>*/}
                <Button disabled={disable} onClick={next}>Next</Button>
            </Grid>
        </div>

    )
};

export default ModalStepper