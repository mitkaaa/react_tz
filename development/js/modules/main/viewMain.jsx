import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import City from './blocks/city'
import View from './blocks/view'

class Main extends React.Component {
    constructor (props) {
        super(props)
        this.state = {}
    }
    
    componentDidMount () {
        setInterval(() => {
            this.setState({ num: ++this.state.num })
        },
        1000)
    }
    
    render () {
        return (
            <div className="wrapper-content">
                <City cities={this.props.cities} />
                <View city={this.props.city} />
            </div>
        )
    }
}
Main.defaultProps = {
    cities: {},
    city: {}
}

Main.propTypes = {
    cities: React.PropTypes.object,
    city: React.PropTypes.object
}


function mapState (state) {
    const cities = state.cities ? state.cities.toJS() : []
    const city = _.reduce(cities, (result, item, key) => item.active ? item : result)
    
    return { cities, city }
}

export default connect(mapState)(Main)
