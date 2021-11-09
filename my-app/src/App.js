import {useEffect, useState} from "react";
import {adressAPI} from "./Api";
import {nanoid} from "nanoid";

function App() {

    const [streets, setStreets] = useState([])
    const [houses, setHouses] = useState([])
    const [flats, setFlats] = useState([])
    const [streetsValue, setStreetsValue] = useState('')
    const [housesValue, setHousesValue] = useState('')
    const [flatsValue, setFlatsValue] = useState('')

    useEffect(() => {
            adressAPI.fetchAllStreets()
                .then(data => {
                    setStreets(data.data)
                })
                .catch((e) => {
                    console.log(e)
                })
        }, []
    )

    const onStreetSelect = (e) => {
        console.log(e.target.dataset.street)
        setStreetsValue(e.target.value)
        adressAPI.fetchAllHouses(e.target.value)
            .then(data => {
                setHouses(data.data)
            })
        setFlats([])
    }
    const onHouseSelect = (e) => {
        setHousesValue(e.target.value)
        adressAPI.fetchAllFlats(e.target.value)
            .then(data => {
                setFlats(data.data)
            })
    }
    const onFlatSelect = (e) => {
        setFlatsValue(e.target.value)
    }


    return (
        <div>
            <div>
                <select

                    value={streetsValue}
                    onChange={onStreetSelect} name="select">
                    {streets.map(street => (
                        <option
                            data-street={street.name}
                            key={street.id}
                            value={street.id}
                        >
                            {street.name}
                        </option>
                    ))}
                </select>
            </div>


            <div>
                <select onChange={onHouseSelect} name="select">
                    {houses.map(house => (
                        <option
                            key={house.id}
                            value={house.id}
                        >
                            {house.name}
                        </option>
                    ))}
                </select>
            </div>


            <div>
                <select onChange={onFlatSelect} name="select">
                    {flats.map(flat => (
                        <option
                            key={flat.id}
                            value={flat.id}
                        >
                            {flat.flat}
                        </option>
                    ))}
                </select>
            </div>

        </div>
    );
}

export default App;
