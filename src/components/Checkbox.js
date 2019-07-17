import React from 'react'

export default class Checkbox extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.handleClick(this.props.habit, this.props.index)
    }
    
    render () {
        const selectedStyle = {
            backgroundColor: "green"
        }

        const defaultStyle = {
            backgroundColor: "blue"
        }

        return (
            <div onClick={this.handleClick} className="badge badge-light p-3 mb-3 ml-1" style={this.props.selected ? selectedStyle : defaultStyle}>
                {" "}
            </div>
        )
    }
}    

