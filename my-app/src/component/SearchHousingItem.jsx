import React from 'react';
import {Autocomplete, Box, TextField} from "@mui/material";
import {nanoid} from "nanoid";

const SearchHousingItem =React.memo(
    (props) => {

        const { label,
            value, setValue,
            // inputValue, setInputValue,
            option} = props
        const [inputValue, setInputValue] = React.useState('');
        return (
            <div>


                <Autocomplete
                    getOptionLabel={(option) => option.name || ''}
                    disablePortal
                    onChange={setValue}
                    inputValue={inputValue}
                    onInputChange={(event, newInputValue) => {
                        setInputValue(newInputValue);
                        console.log(newInputValue)
                    }}
                    id="controllable-states-demo"
                    options={option}
                    sx={{ width: 300 }}
                    renderOption={(props, option) => (
                        <Box
                            key={option.id}
                            component="li"
                            sx={{ mr: 2, flexShrink: 0 }}
                            {...props}>
                            {option.name}
                        </Box>
                    )}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label={label}
                            value={inputValue}
                        />
                    )}
                />
                {/*<select*/}

                {/*    value={streetsValue}*/}
                {/*    onChange={onStreetSelect} name="select">*/}
                {/*    {streets.map(street => (*/}
                {/*        <option*/}
                {/*            data-street={street.name}*/}
                {/*            key={street.id}*/}
                {/*            value={street.id}*/}
                {/*        >*/}
                {/*            {street.name}*/}
                {/*        </option>*/}
                {/*    ))}*/}
                {/*</select>*/}
            </div>
        );
    }
)
export default SearchHousingItem;