import './normalize.css'
import './template.css'
import './weather-icons.css'

import React from 'react'
import { connect } from 'react-redux'

class Template extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount () {}
    render() {
        return (
            <div className="wrapper">
                { this.props.children }
            </div>
        )
    }
}

export default connect(state => state)(Template)