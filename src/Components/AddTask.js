import React from 'react';

function AddTask(props) {
	return <React.Fragment>
		<input onKeyDown={props.addTask} placeholder="Add a new task" id="first_name" type="text" className="validate" />
		<label htmlFor="first_name">Task Name</label>
	</React.Fragment>
}

export default AddTask;