import React, {useEffect, useState} from 'react';
import {Card, Grid} from "@mui/material";
import SearchHousingItem from "./SearchHousingItem";
import {adressAPI} from "../Api";

const SearchHousingList = () => {

    const [streets, setStreets] = useState('')
    const [streetsForUser, setStreetsForUser] = useState('')
    const [streetsOption, setStreetsOption] = useState([])

    // const [houses, setHouses] = useState([])
    // const [flats, setFlats] = useState([])
    // const [streetsValue, setStreetsValue] = useState('')
    // const [housesValue, setHousesValue] = useState('')
    // const [flatsValue, setFlatsValue] = useState('')

    const onStreetSelect = (event, newValue) => {
        setStreetsForUser(newValue)
        console.log(streetsForUser)

    }


        // (e) => {
        //     console.log(e.target.dataset.street)
        //     setStreetsValue(e.target.value)
        //     adressAPI.fetchAllHouses(e.target.value)
        //         .then(data => {
        //             setHouses(data.data)
        //         })
        //     setFlats([])
        // }

    useEffect(() => {
            adressAPI.fetchAllStreets()
                .then(data => {
                    setStreetsOption(data.data)
                    console.log(data.data)
                    // setStreets(data.data[0].id)
                })
                .catch((e) => {
                    console.log(e)
                })
        }, []
    )

    return (
        <Card>
            <Grid container>
                <Grid item>
                    <SearchHousingItem
                        label='Street'
                        value={streets}
                        setValue={onStreetSelect}
                        // inputValue={streetsForUser}
                        // setInputValue={onStreetSelect}
                        option={streetsOption}
                    />
                </Grid>
            </Grid>
        </Card>
    );
};

export default SearchHousingList;