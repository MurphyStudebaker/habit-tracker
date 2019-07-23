import React from 'react';

export default class NewHabitModal extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.addHabit = this.addHabit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    addHabit() {
        this.props.handleClick(this.state.value)
    }
  
    render() {
      return (
       <div>
          <label class="paper-btn margin" for="modal-1">Add a Habit</label>
        <input class="modal-state" id="modal-1" type="checkbox"/>
        <div class="modal">
          <label class="modal-bg" for="modal-1"></label>
          <div class="modal-body">
            <label class="btn-close" for="modal-1">X</label>
            <h4 class="modal-title">Add a Habit</h4>
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label className="col-form-label">
                    New Habit:
                  </label>
                  <input className="form-control" type="text" placeholder="Eat Veggies" value={this.state.value} onChange={this.handleChange} />
                </div>
            </form>    
            <label onClick={this.addHabit} for="modal-1" className="paper-btn">Make it Happen!</label>
          </div>
        </div>
        </div>
      );
    }
  }