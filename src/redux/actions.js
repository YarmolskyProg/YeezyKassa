import { CALC, CALC_FIAT, CHANGE_COIN, CHANGE_FIAT, ERROR, LOAD_COIN, SET_ACTIVE, SET_ACTIVE_FIAT, SET_CARD_NUMBER, SET_EMAIL } from "./types";

export const getCoins = (data) => ({
    type: LOAD_COIN,
    data: data
})
export const setActive = (name) => ({
    type: SET_ACTIVE,
    name: name
})
export const setActiveFiat = (name) => ({
    type: SET_ACTIVE_FIAT,
    name: name
})
export const calcCoin = (amount) => (
    {
        type: CHANGE_COIN,
        amount: amount
    }
)
export const calcFiat = (amount) => (
    {
        type: CHANGE_FIAT,
        amount: amount
    }
)
export const Calcs = () => ({
    type: CALC
})
export const CalcFiat = () => ({
    type: CALC_FIAT
})
export const toggleError = () => ({
    type: ERROR
})
export const setCard = (num) => ({
    type: SET_CARD_NUMBER,
    num: num
})
export const setEmail = (email) => ({
    type: SET_EMAIL,
    email: email
})