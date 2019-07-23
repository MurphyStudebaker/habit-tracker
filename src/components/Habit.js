import React from 'react'
import Checkbox from './Checkbox'

export default class Habit extends React.Component {
    constructor(props) {
        super(props)
        this.handleCheckboxClick = this.handleCheckboxClick.bind(this)
        this.deleteHabit = this.deleteHabit.bind(this)
    }

    handleCheckboxClick(habitName, index){
        this.props.handleClick(habitName, index)
    }

    deleteHabit(){
        this.props.deleteHabit(this.props.index)
    }

    render() {
        return (
            <div className="row flex-middle flex-edge">
                <div className="col">
                    <button onClick={this.deleteHabit}>X</button>
                </div>
                <div className="col">
                    <h3 className="">{this.props.habitName}</h3>
                </div>
                <div className="col">
                    {this.props.days.map(
                        (day, i) => <Checkbox habit={this.props.habitName} index={i} selected={day} handleClick={this.handleCheckboxClick} />
                    )}
                </div>
            </div>
        )
    }
}