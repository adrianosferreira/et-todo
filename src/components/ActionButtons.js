import React from 'react'
import { sequences } from 'cerebral'
import { connect } from '@cerebral/react'

const ActionButtons = (props) => {

  const {showDoneBtn, showDeleteBtn, changeTaskField, task, removeTask} = props;
  const buttonsStyle = { marginTop: '-8px' }

  return (
    <React.Fragment>
      {showDoneBtn && <a onClick={() => changeTaskField({
        id: task.id,
        field: 'status',
        value: 0
      })} style={buttonsStyle} className="secondary-content waves-effect waves-light btn"><i className="large material-icons">done</i></a>}
      {showDeleteBtn && <a onClick={() => removeTask({ id: task.id })} style={buttonsStyle} className="secondary-content waves-effect waves-light btn"><i className="large material-icons">delete_forever</i></a>}
    </React.Fragment>
  )
}

export default connect({changeTaskField: sequences`changeTaskField`, removeTask: sequences`removeTask`}, ActionButtons);