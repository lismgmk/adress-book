import axios from "axios";

const instance = axios.create({
    baseURL: "https://dispex.org/api/vtest/",
});

// api
export const adressAPI = {
    fetchAllStreets() {
        return instance.get(`Request/streets`, {});
    },
    fetchAllHouses(id) {
        return instance.get(`Request/houses/${id}`, {});
    },
    fetchAllFlats(flatId) {
        return instance.get(`Request/house_flats/${flatId}`, {});
    },
    fetchAdressId(param) {
      return instance.get( `HousingStock?streetId=${param}`, {}) //&houseId=853
    },
    fetchHosingStock() {
        return instance.get(`HousingStock?companyId=1`, {});
    },

    createHousing(housing={}) {
        return instance.post(`HousingStock/client`, housing);
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