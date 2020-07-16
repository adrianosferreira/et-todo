import React from 'react'
import EditableField from './EditableField'
import { sequences } from 'cerebral'
import { connect } from '@cerebral/react'

function TaskTable (props) {

  const { tasks, title, opacity, showDeleteBtn, showDoneBtn, changeTaskField, removeTask } = props

  return <React.Fragment>
    {tasks.length > 0 && <React.Fragment>
      <ul className="collection with-header" style={{ opacity: opacity ? opacity : 1 }}>
        <li className="collection-header"><h4>{title} ({tasks.length})</h4></li>
        {tasks.map(task => {

          const buttonsStyle = { marginTop: '-8px' }

          return <li className="collection-item left-align" key={task.id}>
            <div>
              <EditableField id={task.id}/>
              {showDoneBtn && <a onClick={() => changeTaskField({
                id: task.id,
                field: 'status',
                value: 0
              })} style={buttonsStyle} className="secondary-content waves-effect waves-light btn"><i className="large material-icons">done</i></a>}
              {showDeleteBtn && <a onClick={() => removeTask({ id: task.id })} style={buttonsStyle} className="secondary-content waves-effect waves-light btn"><i className="large material-icons">delete_forever</i></a>}
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