import './style.css'

import _ from 'lodash'
import React from 'react'
import ScrollArea from 'react-scrollbar'
import classnames from 'classnames'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { Actions } from '__data__'

class cityComponent extends React.Component {
    // Constructor
    constructor (props) {
        super(props)
        this.wheatherActions = bindActionCreators(Actions.wheatherActions, props.dispatch)
        this.state = {
            newCity: false
        }
    }

    cityInputSubmit (e) {
        this.wheatherActions.fetch(this.refs.cityInput.value)
        this.setState({ newCity: false })
        e.preventDefault()
    }
    
    addPlus () {
        this.setState({ newCity: true }, () => {
            this.refs.cityInput.getDOMNode().focus()
        })
    }
    
    closeCity (city) {
        return () => {
            this.wheatherActions.deleteCity(city)
        }
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
                        {_.map(this.props.cities, (item, key) => {
                            return (<dt className="city-list--col city-list--col-event" key={key}>
                                <span className="city-list--col-close" onClick={this.closeCity(key)}>×</span>
                                <div className="city-list--col-city">
                                    <p>{item.name} [{item.sys.country}]</p>
                                    <span className="city-list--col-under">Суббота, 19 июля</span>
                                </div>
                                <div className="city-list--col-weather">
                                    <span className="city-list--col-weather-icon" />
                                    <span className="city-list--col-weather-degr">-19 &deg;</span>
                                </div>
                            </dt>)
                        })}
                        
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
                        <dt className={classnames('city-list--col', { hidden: !this.state.newCity})}>
                            <form onSubmit={this.cityInputSubmit.bind(this)}>
                                <input type="text" className="city-list--input" ref="cityInput" />
                            </form>
                        </dt>
                        <dt className="city-list--col city-list--col-event city-list--add" onClick={this.addPlus.bind(this)}>
                            <span>+</span>
                        </dt>
                    </dl>
                
                </ScrollArea>
            </div>
        )
    }
}

function mapState (state) {
    return {
        cities: state.cities ? state.cities.toJS() : []
    }
}

export default connect(mapState)(cityComponent)
