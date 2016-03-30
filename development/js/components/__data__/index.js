import { createStore, combineReducers, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk'

import * as Reducers from './reducers'
import promiseMiddleware from 'utils/promiseMiddleware'
import * as Actions from './actions'

const reducer = combineReducers(Reducers)

// let initialState = window.__INITIAL_STATE__ // 


export const store = applyMiddleware(promiseMiddleware)(createStore)(reducer)
export { Actions, Reducers }