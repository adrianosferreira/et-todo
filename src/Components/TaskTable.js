import React from 'react';

function TaskTable(props) {

	const {tasks, actions, title, opacity, showDeleteBtn, showDoneBtn, allowInlineEditing} = props;

	return <React.Fragment>
		{tasks.length > 0 && <React.Fragment>
			<ul className="collection" style={{opacity: opacity ? opacity : 1}}>
				<li className="collection-header"><h4>{title} ({tasks.length})</h4></li>
				{tasks.map(task => {

					const buttonsStyle = {marginTop: '-8px'};

					return <li className="collection-item left-align" key={task.id}>
						<div>
							{task.isEditing && allowInlineEditing ?
								<input style={{width: 'auto'}} onChange={(e) => actions.changeTaskField(task.id, 'name', e.target.value)} onKeyDown={(e) => actions.endEditingTask(task.id, e.key)} type="text" value={task.name}/> :
								<span onClick={() => actions.changeTaskField(task.id, 'isEditing', true)}>{task.name}</span>}
							{showDoneBtn && <a onClick={() => actions.changeTaskField(task.id, 'status', 0)} style={buttonsStyle} className="secondary-content waves-effect waves-light btn"><i className="large material-icons">done</i></a>}
							{showDeleteBtn && <a onClick={() => actions.delete(task.id)} style={buttonsStyle} className="secondary-content waves-effect waves-light btn"><i className="large material-icons">delete_forever</i></a>}
						</div>
					</li>
				})}
			</ul>
		</React.Fragment>}
	</React.Fragment>
}

export default TaskTable;