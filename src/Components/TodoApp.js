import React from 'react';
import TaskTable from "./TaskTable";
import TodoStore from "../Stores/TodoStore";
import AddTask from "./AddTask";

class TodoApp extends React.Component {

	constructor(props) {
		super(props);
		this.state = this.getTodoState()
	}

	componentDidMount() {
		TodoStore.addChangeListener(this.handleStoreChange);
	}

	componentWillUnmount() {
		TodoStore.removeChangeListener(this.handleStoreChange());
	}

	getTodoState() {
		return {
			tasks: TodoStore.getAll()
		}
	}

	handleStoreChange = () => {
		this.setState(this.getTodoState())
	};

	render() {
		const {tasks} = this.state;

		return (<div className="App">
			<div className="row">
				<div className="row">
					<div className="input-field col s5">
						<AddTask/>
						<TaskTable showDoneBtn={true} showDeleteBtn={true} allowInlineEditing={true} title="Pending Tasks" tasks={tasks.filter(task => task.status)}/>
						<TaskTable opacity={0.5} title="Tasks Done" tasks={tasks.filter(task => !task.status)}/>
					</div>
				</div>
			</div>
		</div>);
	}
}

export default TodoApp;
