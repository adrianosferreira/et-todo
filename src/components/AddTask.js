import React from 'react'
import { sequences } from 'cerebral'
import { connect } from '@cerebral/react'

class AddTask extends React.Component {

  addTaskOnEnter = (e) => {
    if (e.key !== 'Enter') {
      return
    }

    this.props.addTask({ newText: e.target.value })
  }

  render () {
    return <React.Fragment>
      <input onKeyDown={this.addTaskOnEnter} placeholder="Add a new task" type="text" className="validate"/>
      <label htmlFor="first_name">Task Name</label>
    </React.Fragment>
  }
}

export default connect({ addTask: sequences`addTask` }, AddTask)