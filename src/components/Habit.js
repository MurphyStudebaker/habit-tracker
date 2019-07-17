import React from 'react'
import Checkbox from './Checkbox'

export default class Habit extends React.Component {
    constructor(props) {
        super(props)
        this.handleCheckboxClick = this.handleCheckboxClick.bind(this)
    }

    handleCheckboxClick(habitName, index){
        this.props.handleClick(habitName, index)
    }

    render() {
        return (
            <div className="d-flex justify-content-between">
                <h3 className="mr-5">{this.props.habitName}</h3>
                <div className="d-flex">
                    <div>
                    {this.props.days.map(
                        (day, i) => <Checkbox habit={this.props.habitName} index={i} selected={day} handleClick={this.handleCheckboxClick} />
                    )}
                    </div>
                </div>
            </div>
        )
    }
}