import * as types from '../action-types'
import axios from 'axios'

const appId = 'c3ed5a5a7660cb33f82cf43558d0f5d4'

/**
 * openweathermap API
 * @param {String} city
 * 
 * @return {object}     - JSON
 */

export function fetch(city) {
    return {
        type: types.CITY,
        promise: axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appId}`)
    }
}

export function deleteCity(city) {
    return {
        type: types.DELETECITY,
        city
    }
}
