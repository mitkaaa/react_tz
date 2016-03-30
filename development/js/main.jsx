import React from 'react'
import { Router, browserHistory } from 'react-router'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from '__data__'

import route from './route.jsx'

ReactDOM.render(
    <Provider store={store}>
        <Router children={route} history={browserHistory} />
    </Provider>
    , document.getElementById('application'))
