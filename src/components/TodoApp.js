import React from 'react'
import TaskTable from './TaskTable'
import AddTask from './AddTask'
import { state } from 'cerebral'
import { connect } from '@cerebral/react'

class TodoApp extends React.Component {

  render () {
    const { tasks } = this.props

    return (<div className="App">
      <div className="row">
        <div className="row">
          <div className="input-field col s5">
            <AddTask/>
            <TaskTable showDoneBtn={true} showDeleteBtn={true} title="Pending Tasks" tasks={tasks.filter(task => task.status)}/>
            <TaskTable opacity={0.5} title="Tasks Done" tasks={tasks.filter(task => !task.status)}/>
          </div>
        </div>
      </div>
    </div>)
  }
}

export default connect({ tasks: state`tasks` }, TodoApp)
