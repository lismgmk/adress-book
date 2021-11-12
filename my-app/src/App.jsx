import {useEffect, useState} from "react";
import {adressAPI} from "./Api";
import {nanoid} from "nanoid";
import {Container} from "@mui/material";
import SearchHousingList from "./component/SearchHousingList";
import ModalHouser from "./Modal/ModalHouser";

function App() {



    return (
        <Container
            sx={{mt: '1rem'}}
        >
            <SearchHousingList />
            <ModalHouser/>

        </Container>
    );
}

export default App;
