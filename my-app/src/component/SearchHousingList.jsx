import React, {useCallback, useEffect, useState} from 'react';
import {Autocomplete, Card, Grid, TextField} from "@mui/material";
import SearchHousingItem from "./SearchHousingItem";
import {adressAPI} from "../Api";

const SearchHousingList = () => {

    const [streets, setStreets] = useState('')
    const [streetsOption, setStreetsOption] = useState([])

    const [houses, setHouses] = useState('')
    const [housesOption, setHousesOption] = useState([])


    const onStreetValue = useCallback(
        (event, newValue) => {
            if( newValue !== null){
                setStreets(newValue.id)
                adressAPI.fetchAllHouses(newValue.id)
                    .then(data => {
                        setHousesOption(data.data)
                    })
            }

            setHouses('')
        }, []
    )

    const onHouseValue = useCallback(
        (event, newValue) => {
            setHouses(newValue.id)
            console.log(newValue)
        }, []
    )

    useEffect(() => {
            adressAPI.fetchAllStreets()
                .then(data => {
                    setStreetsOption(data.data)
                })
                .catch((e) => {
                    console.log(e)
                })
        }, []
    )


    return (
        <Card sx={{p: '40px'}}>
            <Grid spacing={2} container>
                <Grid item>
                    <SearchHousingItem
                        label='Street'
                        setValue={onStreetValue}
                        option={streetsOption}
                    />
                </Grid>
                <Grid item>
                    <SearchHousingItem
                        label='House'
                        setValue={onHouseValue}
                        option={housesOption}
                    />
                </Grid>
            </Grid>
        </Card>
    );
};

export default SearchHousingList;