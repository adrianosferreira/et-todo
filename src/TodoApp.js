import React from 'react';
import './App.css';
import AddTask from "./Components/AddTask";
import TaskTable from "./Components/TaskTable";

class TodoApp extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			tasks: []
		}
	}

	addTask = (e) => {
		const {key, target} = e;
		if (key === 'Enter') {

			this.setState(state => {
				return {
					...state,
					tasks: [...state.tasks, target.value]
				}
			});
		}
	};

	render() {
		return (<div className="App">
			<div className="row">
				<div className="row">
					<div className="input-field col s5">
						<AddTask addTask={this.addTask}/>
						<TaskTable tasks={this.state.tasks}/>
					</div>
				</div>
			</div>
		</div>);
	}
}

export default TodoApp;
