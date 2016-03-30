import './style.css'

import React from 'react'

class cityComponent extends React.Component {
    // Constructor
    constructor (props) {
        super(props)
    }
    
    render () {
        return (
            <div className="city">
                <dl className="city-list">
                    <dt className="city-list--col">
                        <div className="city-list--col-city">
                            <p>Москва</p>
                            <span>Суббота, 19 июля</span>
                        </div>
                        <div className="city-list--col-weather">
                            <span className="city-list--col-weather-icon" />
                            <span className="city-list--col-weather-degr">-19 &deg;</span>
                        </div>
                    </dt>
                    
                    <dt className="city-list--col city-list--col-active">
                        <div className="city-list--col-city">
                            <p>Санкт-петербург</p>
                            <span>Суббота, 19 июля</span>
                        </div>
                        <div className="city-list--col-weather">
                            <span className="city-list--col-weather-icon" />
                            <span className="city-list--col-weather-degr">+23 &deg;</span>
                        </div>
                    </dt>
                    <dt className="city-list--col city-list--add">
                        <span>+</span>
                    </dt>
                </dl>
            </div>
        )
    }
}

export default cityComponent
