import _ from 'lodash'
import { Map } from 'immutable'
import * as types from '../action-types'

let data = localStorage.getItem("cities") ? JSON.parse(localStorage.getItem("cities")) : {}

export default (state = new Map(data), action) => {
    switch (action.type) {
        case types.CITY: {
            const responce = action.res.data
            const newState = state.set(responce.name, responce)
            localStorage.setItem("cities", JSON.stringify(newState.toJS()))
            return newState
        }
        case types.DELETECITY: {
            const {city} = action
            const newState = state.delete(city)
            localStorage.setItem("cities", JSON.stringify(newState.toJS()))
            return newState
        }
        
        default: return state
    }
}