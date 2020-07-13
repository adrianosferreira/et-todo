import React from 'react';

function TaskTable(props) {
	return <React.Fragment>
		{props.tasks.length > 0 &&
			<ul className="collection">
				{props.tasks.map((task, id) => {

					const buttonsStyle = {marginTop: '-8px'};

					return <li className="collection-item left-align" key={id}>
						<div>{task}
							<a style={buttonsStyle} className="secondary-content waves-effect waves-light btn"><i className="large material-icons">done</i></a>
							<a style={buttonsStyle} className="secondary-content waves-effect waves-light btn"><i className="large material-icons">edit</i></a>
							<a style={buttonsStyle} className="secondary-content waves-effect waves-light btn"><i className="large material-icons">delete_forever</i></a>
						</div>
					</li>
				})}
			</ul>
		}
	</React.Fragment>
}

export default TaskTable;