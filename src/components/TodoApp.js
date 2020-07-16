import React from 'react'
import TaskTable from './TaskTable'
import AddTask from './AddTask'
import { state } from 'cerebral'
import { connect } from '@cerebral/react'

class TodoApp extends React.Component {

  render () {
    const { active, inactive } = this.props

    return (<div className="App">
      <div className="row">
        <div className="row">
          <div className="input-field col s5">
            <AddTask/>
            <TaskTable showDoneBtn={true} showDeleteBtn={true} title="Pending Tasks" tasks={active}/>
            <TaskTable opacity={0.5} title="Tasks Done" tasks={inactive}/>
          </div>
        </div>
      </div>
    </div>)
  }
}

export default connect({
  active:   state`active`,
  inactive: state`inactive`
}, TodoApp)
