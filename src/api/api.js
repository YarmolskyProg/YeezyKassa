import axios from 'axios'
let api = 'https://634fc55b78563c1d82af3e93.mockapi.io/exchanger'
let instance = axios.create({
    baseURL: api
})

export let coinApi = {
     getCoins(){
        return instance.get().then(res=>res.data)
     }
}