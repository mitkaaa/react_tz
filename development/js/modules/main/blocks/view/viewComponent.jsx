import './style.css'

import _ from 'lodash'
import React from 'react'
import { Col } from 'react-bootstrap'
import classnames from 'classnames'

export default class viewComponent extends React.Component {
    constructor (props) {
        super(props)
    }

    degr (value) {
        const pre = Math.abs(value) === value ? '+' : '-'
        value = Math.abs(Math.round(value))
        return `${pre} ${value} °`
    }
    
    render () {
        const city = this.props.city
        
        if (_.isEmpty(city)) return (<div></div>)
        
        return (
            <div className="view">
                <div className="view-today">
                    <span className="view-today-col--dddd">
                        {city.date.dddd}
                    </span>
                    <span className="view-today-col--DMMMM">
                        {city.date.DMMMM}
                    </span>
                    <div className={classnames('view-today-col--icon', 'weather-icon-' + city.weather[0].icon)}></div>
                    <div className="view-today-col--degr">
                        { this.degr(city.temp.day) }
                    </div>
                </div>
                <div className="view-under">
                    {_.map(city.list, (item, key) => 
                        <Col md="2" xs="6" className="view-under-col" key={key}>
                            <span className="view-under-col--dddd">
                                {item.date.dddd}
                            </span>
                            <span className="view-under-col--DMMMM">
                                {item.date.DMMMM}
                            </span>
                            <div className={classnames('view-under-col--icon', 'weather-icon-' + item.weather[0].icon)}></div>
                            <div className="view-under-col--degr">
                                { this.degr(item.temp.day) }
                            </div>
                        </Col>
                    )}
                </div>
            </div>
        )
    }
}

viewComponent.defaultProps = {
    city: {}
}

viewComponent.propTypes = {
    city: React.PropTypes.object
}
