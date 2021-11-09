import axios from "axios";

const instance = axios.create({
    baseURL: "https://dispex.org/api/vtest/Request/",
});

// api
export const adressAPI = {
    fetchAllStreets() {
        return instance.get(`streets`, {});
    },
    fetchAllHouses(id) {
        return instance.get(`houses/${id}`, {});
    },
    fetchAllFlats(flatId) {
        return instance.get(`house_flats/${flatId}`, {});
    },
    // fetchMainCoins(arrCoin: Array<string>) {
    //     let stringFetch = ''
    //     arrCoin.forEach((i, index)=>{
    //         if(index == 0){
    //             stringFetch = `?ids=${i}`
    //         } else{
    //             stringFetch += `,${i}`
    //         }
    //     })
    //     return instance.get<{data: Array<CoinType>}>(stringFetch, {});
    // },
    // fetchHistoryCoins(idCoin: string, interval: string='d1') {
    //     return instance.get<{data: Array<HistoryCoinType>}>(`${idCoin}/history?interval=${interval}`, {});
    // },

};