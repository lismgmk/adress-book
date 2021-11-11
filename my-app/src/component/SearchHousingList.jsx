import React, {useCallback, useEffect, useState} from 'react';
import {Autocomplete, Card, Grid, TextField} from "@mui/material";
import SearchHousingItem from "./SearchHousingItem";
import {adressAPI} from "../Api";
import HousesList from "./HousesList";

const SearchHousingList = () => {

    // const [streets, setStreets] = useState('')
    const [streetsInput, setStreetsInput] = useState('')
    const [streetsOption, setStreetsOption] = useState([])
    const [streetsOptionId, setStreetsOptionId] = useState(0)

    const [housesInput, setHousesInput] = useState('')
    const [housesOption, setHousesOption] = useState([])

    const [flatsInput, setFlatsInput] = useState('')
    const [flatsOption, setFlatsOption] = useState([])


    const onStreetValue = useCallback(
        (event, newValue) => {
            if( newValue !== null){
                // setStreets(newValue.id)
                adressAPI.fetchAllHouses(newValue.id)
                    .then(data => {
                        setHousesOption(data.data)
                    })
            }
        }, [streetsInput]
    )

    const onHouseValue = useCallback(
        (event, newValue) => {
            if( newValue !== null){
                adressAPI.fetchAllFlats(newValue.id)
                    .then(data => {
                        setFlatsOption(data.data)
                    })
            }
        }, [housesInput]
    )
    const onFlatValue = useCallback(
        (event, newValue) => {
            // if( newValue !== null){
            //     adressAPI.fetchAllFlats(newValue.id)
            //         .then(data => {
            //             setFlatsOption(data.data)
            //         })
            // }
        }, [flatsInput]
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


    const onStreetInput = useCallback(
        (event, newInputValue) => {
            setStreetsInput(newInputValue);
            console.log(newInputValue)
            setStreetsOptionId(event.target.dataset.key)
            // debugger
            setHousesInput('')
            setFlatsInput('')
            setHousesOption([])
            setFlatsOption([])
        }
        ,[]
    )

    const onHouseInput = useCallback(
        (event, newInputValue) => {
            // debugger
            setFlatsInput('')
            if(event === null){
                setHousesInput('')
                setFlatsOption([])
            } else{
                setHousesInput(newInputValue)
            }
        }
        , []
    )

    const onFlatInput = useCallback(
        (event, newInputValue) => {
            // debugger
            if(event === null){
                setFlatsInput('')
                // setFlatsOption([])
            } else{
                setFlatsInput(newInputValue)
            }
        }
        , []
    )


    return (
        <>
            <Card sx={{p: '40px'}}>
                <Grid spacing={2} container>
                    <Grid item>
                        <SearchHousingItem
                            label='Street'
                            setValue={onStreetValue}
                            option={streetsOption}
                            inputValue={streetsInput}
                            setInputValue={onStreetInput}
                        />
                    </Grid>
                    <Grid item>
                        <SearchHousingItem
                            label='House'
                            setValue={onHouseValue}
                            option={housesOption}
                            inputValue={housesInput}
                            setInputValue={onHouseInput}
                        />
                    </Grid>
                    <Grid item>
                        <SearchHousingItem
                            label='Flat'
                            setValue={onFlatValue}
                            option={flatsOption}
                            inputValue={flatsInput}
                            setInputValue={onFlatInput}
                        />
                    </Grid>
                </Grid>
            </Card>
            <Card>
                <HousesList
                street={streetsOptionId}
                />
            </Card>
        </>

    );
};

export default SearchHousingList;