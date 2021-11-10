import React from 'react';
import {Autocomplete, Box, TextField} from "@mui/material";
import {nanoid} from "nanoid";

const SearchHousingItem = (props) => {

    const { label,
        value, setValue,
        // inputValue, setInputValue,
        option} = props

    return (
        <div>

            <Autocomplete

                getOptionLabel={(option) => option.name}
                disablePortal
                value={value}
                onChange={setValue}
                // inputValue={inputValue}
                // onInputChange={setInputValue}
                id="controllable-states-demo"
                options={option}
                sx={{ width: 300 }}
                renderOption={(props, option) => (
                    <Box
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
};

export default SearchHousingItem;