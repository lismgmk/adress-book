import React from 'react';
import {Grid} from "@mui/material";

const Houser = (props) => {
const {phone, name} = props
    return (
        <Grid item>
            {phone} {name}
        </Grid>
    );
};

export default Houser;