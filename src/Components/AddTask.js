import React from 'react';

function AddTask(props) {

	const afterTaskAdded = (target) => {
		target.value = "";
	};

	const addTaskOnEnter = (e) => {
		if (e.key !== "Enter" || !e.target.value) {
			return;
		};

		props.addTask(e, afterTaskAdded);
	};

	return <React.Fragment>
		<input onKeyDown={addTaskOnEnter} placeholder="Add a new task"type="text" className="validate" />
		<label htmlFor="first_name">Task Name</label>
	</React.Fragment>
}

export default AddTask;