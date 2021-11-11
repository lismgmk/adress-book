import React from 'react';
import {Autocomplete, Box, TextField} from "@mui/material";

const SearchHousingItem =React.memo(
    (props) => {

        const { label,
            value, setValue,
            inputValue, setInputValue,
            option} = props
        return (
            <div>


                <Autocomplete
                    getOptionLabel={(option) => option.name || ''}
                    disablePortal
                    onChange={setValue}
                    inputValue={inputValue}
                    onInputChange={setInputValue}
                    id="controllable-states-demo"
                    options={option}
                    sx={{ width: 300 }}
                    renderOption={(props, option) => (
                        <Box
                            data-key={option.id}
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
            </div>
        );
    }
)
export default SearchHousingItem;