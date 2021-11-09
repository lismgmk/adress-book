import {useEffect, useState} from "react";
import {adressAPI} from "./Api";
import {nanoid} from "nanoid";

function App() {

    const [streets, setStreets] = useState([])
    const [streetsForUser, setStreetsForUser] = useState('')
    const [houses, setHouses] = useState([])
    const [flats, setFlats] = useState([])
    const [streetsValue, setStreetsValue] = useState('')
    const [housesValue, setHousesValue] = useState('')
    const [flatsValue, setFlatsValue] = useState('')

    useEffect(() => {
            adressAPI.fetchAllStreets()
                .then(data => {
                    setStreets(data.data)
                    // setStreetsForUser(data.data)
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
    // "Id": 0,
    //     "Name": "string",
    //     "Phone": "string",
    //     "Email": "string",
    //     "BindId": 0
    const [form, setForm] = useState({})
    let userId = 0



const onSubmit = async () => {

    // const [firstResponse, secondResponse] = await Promise.all([
    //     adressAPI.createHousing({...form, Id : nanoid(), BindId: nanoid()}),
    //     axios.get(`https://maps.googleapis.com/maps/api/geocode/json?&address=${this.props.p2}`)
    // ]);

     const data = await adressAPI.createHousing({...form, Id : nanoid(), BindId: nanoid()})
    const userId = data.data.id
    const dataStock = await adressAPI

    const []
        adressAPI.createHousing(form)
        .then((data)=>{
            userId = data.data.id
            return
        })
        .then()
}

const onStreetForUserSelect = (e)=>{
    setStreetsForUser(e.target.value)
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

            <form onSubmit={onSubmit}>


                <label>
                    Name:
                    <input type="text" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} />
                </label>
                <label>
                    Phone:
                    <input type="text" value={form.phone} onChange={(e) => setForm({...form, phone: e.target.value})} />
                </label>
                <label>
                    email:
                    <input type="text" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} />
                </label>

                <div>
                    <select
                        onChange={onStreetForUserSelect} name="select">
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
                    <select onChange={onHouseForUserSelect} name="select">
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
                    <select onChange={onFlatForUserSelect} name="select">
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
                <input type="submit" value="Отправить" />
            </form>





        </div>
    );
}

export default App;
