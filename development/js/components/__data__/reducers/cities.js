import _ from 'lodash'
import { Map } from 'immutable'
import moment from 'moment'
import * as types from '../action-types'

let data = localStorage.getItem("cities") ? JSON.parse(localStorage.getItem("cities")) : {}

export default (state = new Map(data), action) => {
    switch (action.type) {
    case types.CITY: {
        let today = moment()
        const responce = action.res.data
        const firstElement = responce.list[0]
        const newState = state.set(responce.city.name, _.extend(
            responce,
            { moment: today, date: { dddd: today.format('dddd'), DMMMM: today.format('D MMMM') }, active: false},
            firstElement,
            { list: _(responce.list).drop().map((item, key) => {
                today.add(1, 'd')
                const itemWithDate = _.extend(
                    item,
                    { moment: today, date: { dddd: today.format('dddd'), DMMMM: today.format('D MMMM') }}
                )
                return itemWithDate
            }).value()}
        ))
        localStorage.setItem("cities", JSON.stringify(newState.toJS()))
        return newState
    }
    case types.DELETECITY: {
        const {city} = action
        const newState = state.delete(city)
        localStorage.setItem("cities", JSON.stringify(newState.toJS()))
        return newState
    }
    
    case types.ACTIVECITY: {
        const {city} = action
        const newState = new Map(_.mapValues(state.toJS(), (item, key) => {
            item.active = key === city ? true : false
            return item
        }))
        
        localStorage.setItem("cities", JSON.stringify(newState.toJS()))
        return newState
    }
    
    default: return state
    }
}
