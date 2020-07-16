import React from 'react'
import EditableField from './EditableField'
import { sequences } from 'cerebral'
import { connect } from '@cerebral/react'
import ActionButtons from './ActionButtons'

function TaskTable (props) {

  const { tasks, title, opacity, showDeleteBtn, showDoneBtn} = props

  return <React.Fragment>
    {tasks.length > 0 && <React.Fragment>
      <ul className="collection with-header" style={{ opacity: opacity ? opacity : 1 }}>
        <li className="collection-header"><h4>{title} ({tasks.length})</h4></li>
        {tasks.map(task => {
          return <li className="collection-item left-align" key={task.id}>
            <div>
              <EditableField id={task.id}/>
              <ActionButtons showDeleteBtn={showDeleteBtn} showDoneBtn={showDoneBtn} task={task} />
            </div>
          </li>
        })}
      </ul>
    </React.Fragment>}
  </React.Fragment>
}

export default connect({
  changeTaskField: sequences`changeTaskField`,
  removeTask:      sequences`removeTask`
}, TaskTable)