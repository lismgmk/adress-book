import React, {useState} from "react";


export const useInput = (inputValue, optionValue) => {

    const [streetsInput, setStreetsInput] = useState(inputValue)
    const [streetsOption, setStreetsOption] = useState(optionValue)

    // const [value, setValue] = useState(initialValue)
    //
    // const onChange = (e) => {
    //     setValue(e.target.value)
    // }
    //
    // return {
    //     value, onChange
    // }
}
