import './template.css'

import React from 'react'
import { connect } from 'react-redux'
import { Col } from 'react-bootstrap'


class Template extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount () {
        window.addEventListener('resize', () => {
        }, true)    
    }
    render() {
        return (
            <div className="wrapper">
                { this.props.children }
            </div>
        )
    }
}

export default connect(state => state)(Template)