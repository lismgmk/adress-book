import React, {useEffect, useState} from 'react';
import {Grid} from "@mui/material";
import Houser from "./Houser";
import {adressAPI} from "../Api";

const HousesList = (props) => {
    const {street} = props
    const [houses, setHouses] = useState([])


    let clients = []
    let currentHouses = () => {
        houses.forEach(i =>{
            if (i.clients.length > 0) {
                return  clients.concat(i.clients)
            }
        })
    }

    useEffect(()=>{
        debugger
        adressAPI.fetchAdressId(street)
                .then(data => {
                    setHouses(data.data)
                })
            .then(data => currentHouses())

    }, [street])
    console.log(street)
    return (
        <Grid container>
            {
                clients.map((client) => {
                        return <Houser
                            phone={client.phone}
                            name={client.name}
                        />
                })
            }
        </Grid>
    );
};

export default HousesList;