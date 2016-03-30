import React from 'react'
import City from './blocks/city'

export default class Main extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            num: 1
        }
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
                <City />
                <h1 className="wrapper-content__number">{ this.state.num}</h1>
            </div>
        )
    }
}
