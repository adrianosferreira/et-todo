import React from 'react';
import { sequences, state } from "cerebral";
import { connect } from "@cerebral/react";

function EditableField(props) {
	const {id, changeTaskField, tasks} = props;
	const task = tasks[id];

	const endEditing = (e) => {
		if (e.key !== 'Enter') {
			return;
		}

		changeTaskField({id: task.id, field: 'isEditing', value: false});
	};

	return <React.Fragment>
		{task.isEditing ? <input style={{width: 'auto'}} onChange={(e) => changeTaskField({id: task.id, field: 'name', value: e.target.value})} onKeyDown={(e) => endEditing(e)} type="text" value={task.name}/> :
			<span onClick={() => changeTaskField({id: task.id, field: 'isEditing', value: true})}>{task.name}</span>}
	</React.Fragment>
}

export default connect({changeTaskField: sequences`changeTaskField`, tasks: state`all`}, EditableField);