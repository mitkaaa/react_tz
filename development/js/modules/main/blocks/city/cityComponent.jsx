import './style.css'

import _ from 'lodash'
import React from 'react'
import ScrollArea from 'react-scrollbar'
import classnames from 'classnames'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { Actions } from '__data__'

class cityComponent extends React.Component {
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
    
    activeCity (city) {
        return () => {
            this.wheatherActions.activeCity(city)
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
                            return (<dt className={classnames('city-list--col', 'city-list--col-event', {'city-list--col-active': item.active})} key={key} onClick={this.activeCity(key)}>
                                <span className="city-list--col-close" onClick={this.closeCity(key)}>×</span>
                                <div className="city-list--col-city">
                                    <p>{item.city.name} {item.city.country}</p>
                                    <span className="city-list--col-under">{item.date}</span>
                                </div>
                                <div className="city-list--col-weather">
                                    <span className={classnames('city-list--col-weather-icon', 'weather-icon-' + item.list[0].weather[0].icon )}/>
                                    <span className="city-list--col-weather-degr">
                                    {Math.abs( item.list[0].temp.day) === item.list[0].temp.day && '+'}
                                    {Math.abs( item.list[0].temp.day) !== item.list[0].temp.day && '-'}
                                    {Math.abs(Math.round(item.list[0].temp.day))} &deg;
                                    </span>
                                </div>
                            </dt>)
                        })}
                        
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
