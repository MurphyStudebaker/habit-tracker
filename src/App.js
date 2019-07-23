import React from 'react';

import ls from 'local-storage'

/** import components */
import Habit from './components/Habit'
import NewHabitModal from './components/NewHabitModal'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      habits: [
      ]
    }

    this.handleCheckboxClick = this.handleCheckboxClick.bind(this)
    this.addHabit = this.addHabit.bind(this)
    this.deleteHabit = this.deleteHabit.bind(this)
  }

  componentDidMount() {
    this.setState({
      habits : ls.get('habits') || [],
    })
  }

  handleCheckboxClick(habitName, index) {
    var habitIndex = this.state.habits.findIndex(
      h => h.habitName === habitName
    )
    let updatedHabit = this.state.habits[habitIndex]
    updatedHabit.days[index] = !updatedHabit.days[index]
    let newHabits = [...this.state.habits.slice(0, habitIndex), updatedHabit, ...this.state.habits.slice(habitIndex +1)]
    this.setState({
        habits: newHabits
    })
    ls.set('habits', newHabits)
  }

  addHabit(habitName) {
    let newHabit = {habitName: habitName, days: [false,false,false,false,false,false,false]}
    let newHabits = [...this.state.habits, newHabit]
    this.setState({
      habits: newHabits
    })
    ls.set('habits',newHabits)
  }

  deleteHabit(index) {
    let newHabits = [...this.state.habits.slice(0, index), ...this.state.habits.slice(index +1)]
    this.setState({habits: newHabits})
  }

  render() {
    return (
      <div className="App container">
        <h1 className="margin-bottom-none">Eat Your Veggies</h1>
        <h3 className="margin-top-none">A Habit Tracker</h3>
        <div className="habits mt-5">
          { this.state.habits.length < 1 ?
            (<p> You don't have any habits yet! </p>) : (
            this.state.habits.map(
            (habit, i) => <Habit habitName={habit.habitName} days={habit.days} handleClick={this.handleCheckboxClick} index={i} deleteHabit={this.deleteHabit}/>
          ))}
        </div>
        <NewHabitModal handleClick={this.addHabit}/>
      </div>
    );
  }
}



export default App;
