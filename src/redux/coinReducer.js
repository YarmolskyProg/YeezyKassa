import { coinApi } from "../api/api"
import { getCoins } from "./actions"
import { CALC, CALC_FIAT, CHANGE_COIN, CHANGE_FIAT, ERROR, LOAD_COIN, SET_ACTIVE, SET_ACTIVE_FIAT, SET_CARD_NUMBER, SET_EMAIL } from "./types"

const initialState = {
    crypto: [],
    activecoin: {},
    activefiat: {},
    coinamount: 0,
    fiatamount: 0,
    reserv: Math.floor(Math.random() * 8000000) + 1920000,
    error: false,
    cardnumber: '',
    email: ''
}

let coinReducer = (state = initialState, type) => {
    switch (type.type) {
        case SET_CARD_NUMBER: {
            return {
                ...state,
                cardnumber: type.num
            }
        }
        case SET_EMAIL: {
            return {
                ...state,
                email: type.email
            }
        }
        case LOAD_COIN:
            return {
                ...state,
                crypto: type.data,
            }
        case SET_ACTIVE: {
            return {
                ...state,
                activecoin: type.name
            }
        }
        case SET_ACTIVE_FIAT: {
            return {
                ...state,
                activefiat: type.name
            }
        }
        case CHANGE_COIN: {
            return {
                ...state,
                fiatamount: (type.amount * state.activecoin.rate).toFixed(3),
                coinamount: type.amount
            }
        }
        case CHANGE_FIAT: {
            return {
                ...state,
                fiatamount: type.amount,
                coinamount: (type.amount / state.activecoin.rate).toFixed(6)
            }
        }
        case CALC: {
            return {
                ...state,
                coinamount: state.coinamount,
                fiatamount: (state.coinamount * state.activecoin.rate).toFixed(3)

            }
        }
        case CALC_FIAT: {
            return {
                ...state,
                coinamount: (state.fiatamount / state.activecoin.rate).toFixed(3),
                fiatamount: state.fiatamount
            }
        }
        case ERROR: {

            if (state.fiatamount < 12400 || state.fiatamount > state.reserv) {
                return {
                    ...state,
                    error: true
                }
            }
            return {
                ...state,
                error: false
            }
        }
        default:
            return state
    }
}

export default coinReducer

export let LoadCoin = () => {
    return (dispatch) => {
        coinApi.getCoins().then(res => {
            dispatch(getCoins(res.map(e => {
                return {
                    coin: e.coin,
                    fiat: e.fiat
                }
            })))
        })
    }
}