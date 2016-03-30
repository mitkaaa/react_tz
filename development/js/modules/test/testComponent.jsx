import React from 'react'
import { Link } from 'react-router'

class Test extends React.Component {
    // Constructor
    constructor (props) {
        super(props)
    }
    
    componentDidMount () {
    }
    
    render () {
        return (
            <div>
                <h1>Тестовый заголовок</h1>
                <Link to="/">Index</Link>
            </div>
        )
    }
}

export default Test
