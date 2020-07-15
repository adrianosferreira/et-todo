import React from 'react';
import TodoActions from "../Actions/TodoActions";

class AddTask extends React.Component{

	addTaskOnEnter = (e) => {
		if (e.key !== "Enter") {
			return;
		}

		TodoActions.create(e.target.value);
	};

	render() {
		return <React.Fragment>
			<input onKeyDown={this.addTaskOnEnter} placeholder="Add a new task" type="text" className="validate" />
			<label htmlFor="first_name">Task Name</label>
		</React.Fragment>
	}
}

export default AddTask;