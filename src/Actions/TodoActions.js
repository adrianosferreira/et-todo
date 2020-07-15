import AppDispatcher from "../Dispatcher/AppDispatcher";

const TodoActions = {
	create:  (text) => {
		AppDispatcher.handleViewAction({
										   actionType: 'create',
										   text:       text
									   });
	},
	destroy: (id) => {
		AppDispatcher.handleViewAction({
										   actionType: 'destroy',
										   id:         id
									   })
	},
	edit:    (id, field, value) => {
		AppDispatcher.handleViewAction({
										   actionType: 'edit',
										   id:         id,
										   field:      field,
										   value:      value
									   })
	}
};

export default TodoActions;