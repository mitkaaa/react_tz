import './style.css'

import React from 'react'
import ScrollArea from 'react-scrollbar'
import { connect } from 'react-redux'

import { Actions } from '__data__'


import Autocomplite from '../city-input-autocomplite'

class cityComponent extends React.Component {
    // Constructor
    constructor (props) {
        super(props)
        
    }
    
    handlerCallbackAutocomplete (city) {
        Actions.CityAutocompleetActions.fetch(city)
        
    }
    
    render () {
        return (
            <div className="city">
                <ScrollArea
                    speed={0.8}
                    horizontal={false}
                    style={{ height: window.innerHeight }}
                    >
                    <dl className="city-list">
                        <dt className="city-list--col city-list--col-event">
                            <div className="city-list--col-city">
                                <p>Москва</p>
                                <span>Суббота, 19 июля</span>
                            </div>
                            <div className="city-list--col-weather">
                                <span className="city-list--col-weather-icon" />
                                <span className="city-list--col-weather-degr">-19 &deg;</span>
                            </div>
                        </dt>
                        
                        <dt className="city-list--col city-list--col-event city-list--col-active">
                            <div className="city-list--col-city">
                                <p>Санкт-петербург</p>
                                <span>Суббота, 19 июля</span>
                            </div>
                            <div className="city-list--col-weather">
                                <span className="city-list--col-weather-icon" />
                                <span className="city-list--col-weather-degr">+23 &deg;</span>
                            </div>
                        </dt>
                        <dt className="city-list--col">
                            <Autocomplite className="city-list--input" bar={[]} handlerCallback={ this.handlerCallbackAutocomplete}/>
                        </dt>
                        <dt className="city-list--col city-list--add">
                            <span>+</span>
                        </dt>
                    </dl>
                
                </ScrollArea>
            </div>
        )
    }
}

function mapState (state) {
    console.log(state)
    return state
}

export default connect(mapState)(cityComponent)
