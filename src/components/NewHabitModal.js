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
        <div className="modal fade" id="newHabitModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
        <div className="modal-content">
            <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Add a New Habit</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            </div>
        <div className="modal-body">
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label className="col-form-label">
                        New Habit:
                    </label>
                    <input className="form-control" type="text" value={this.state.value} onChange={this.handleChange} />
                </div>
            </form>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
            <button type="button" class="btn btn-primary" onClick={this.addHabit} data-dismiss="modal">Add Habit</button>
        </div>
        </div>
        </div>
        </div>
      );
    }
  }