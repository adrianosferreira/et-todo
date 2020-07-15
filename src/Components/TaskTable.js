import React from 'react';
import EditableField from "./EditableField";
import TodoActions from "../Actions/TodoActions";
import TodoStore from "../Stores/TodoStore";

const handleDestroyClick = (id) => {
	TodoActions.destroy(id);
};

const handleTaskEdit = (id, field, value) => {
	TodoActions.edit(id, field, value);
};

function TaskTable(props) {

	const {tasks, title, opacity, showDeleteBtn, showDoneBtn, allowInlineEditing} = props;

	return <React.Fragment>
		{tasks.length > 0 && <React.Fragment>
			<ul className="collection with-header" style={{opacity: opacity ? opacity : 1}}>
				<li className="collection-header"><h4>{title} ({tasks.length})</h4></li>
				{tasks.map(task => {

					const buttonsStyle = {marginTop: '-8px'};

					return <li className="collection-item left-align" key={task.id}>
						<div>
							<EditableField id={task.id} allowInlineEditing={allowInlineEditing} isEditing={task.isEditing} changeField={handleTaskEdit} value={task.name}/>
							{showDoneBtn && <a onClick={() => handleTaskEdit(task.id, 'status', 0)} style={buttonsStyle} className="secondary-content waves-effect waves-light btn"><i className="large material-icons">done</i></a>}
							{showDeleteBtn && <a onClick={() => handleDestroyClick(task.id)} style={buttonsStyle} className="secondary-content waves-effect waves-light btn"><i className="large material-icons">delete_forever</i></a>}
						</div>
					</li>
				})}
			</ul>
		</React.Fragment>}
	</React.Fragment>
}

export default TaskTable;