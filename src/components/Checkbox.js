import React from 'react'

export default class Checkbox extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.handleClick(this.props.habit, this.props.index)
    }

    getDayOfWeek() {
        let day = "something"
        switch(this.props.index) {
            case 0: day = "M"; break;
            case 1: day = "T"; break;
            case 2: day = "W"; break;
            case 3: day = "T"; break;
            case 4: day = "F"; break;
            default: day = "S"; 
        }
        return day
    }
    
    render () {
        const selectedStyle = {
            backgroundColor: "#421630"
        }

        const defaultStyle = {
            backgroundColor: "white",
            border: "2px solid  #421630",
            color: "#421630"
        }

        return (
            <span onClick={this.handleClick} className="badge padding-small margin-small" style={this.props.selected ? selectedStyle : defaultStyle}>
                {this.getDayOfWeek()}
            </span>
        )
    }
}    

