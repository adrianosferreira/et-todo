import React from 'react'
import { sequences, state } from 'cerebral'
import { connect } from '@cerebral/react'

class AddTask extends React.Component {

  addTaskOnEnter = (e) => {
    if (e.key !== 'Enter') {
      return
    }

    this.props.addTask({ newText: e.target.value})
  }

  render () {

    const {currentText, changeCurrentText} = this.props;

    return <React.Fragment>
      <input onKeyDown={this.addTaskOnEnter} placeholder="Add a new task" value={currentText} onChange={(e) => changeCurrentText({value: e.target.value})} type="text" className="validate"/>
      <label htmlFor="first_name">Task Name</label>
    </React.Fragment>
  }
}

export default connect({ addTask: sequences`addTask`, currentText: state`currentText`, changeCurrentText: sequences`changeCurrentText` }, AddTask)