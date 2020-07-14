import React from 'react';
import AddTask from "./AddTask";
import TaskTable from "./TaskTable";

class TodoApp extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			newTaskName: '',
			tasks:       []
		}
	}

	addTask = (e, afterTaskAdded) => {

		const {target} = e;

		this.setState(state => {
			return {
				...state,
				tasks: [
					...state.tasks, {
						id:        new Date().getTime(),
						name:      target.value,
						status:    1,
						isEditing: false
					}
				]
			}
		}, () => afterTaskAdded(target));
	};

	deleteTask = (indexToRemove) => {
		this.setState(state => {
			return {
				...state,
				tasks: state.tasks.filter(task => task.id !== indexToRemove)
			}
		});
	};

	changeTaskEditingState = (id, status) => {
		this.changeTaskField(id, 'isEditing', status);
	};

	changeTaskField = (id, field, value) => {
		this.setState(state => {
			return {
				...state,
				tasks: state.tasks.map(task => {
					if (task.id === id) {
						task[field] = value;
					}

					return task;
				})
			}
		});
	};

	render() {
		const {tasks} = this.state;
		const actions = {
			delete:          this.deleteTask,
			changeTaskField: this.changeTaskField,
		};

		return (<div className="App">
			<div className="row">
				<div className="row">
					<div className="input-field col s5">
						<AddTask addTask={this.addTask}/>
						<TaskTable showDoneBtn={true} showDeleteBtn={true} allowInlineEditing={true} title="Pending Tasks" actions={actions} tasks={tasks.filter(task => task.status)}/>
						<TaskTable opacity={0.5} actions={actions} title="Tasks Done" tasks={tasks.filter(task => !task.status)}/>
					</div>
				</div>
			</div>
		</div>);
	}
}

export default TodoApp;
