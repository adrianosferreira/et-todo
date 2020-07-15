import EventEmitter from 'events';
import AppDispatcher from "../Dispatcher/AppDispatcher";

class TodoStore extends EventEmitter {

	constructor() {
		super();
		this.todos = [];

		AppDispatcher.register((payload) => {
			const action = payload.action;
			let text;

			switch (action.actionType) {
				case 'create':
					text = action.text;
					if (text) {
						this.create(text);
						this.emitChange();
					}
					break;
				case 'destroy':
					this.destroy(action.id);
					this.emitChange();
					break;
				case 'edit':
					this.edit(action.id, action.field, action.value);
					this.emitChange();
					break;
				default:
					break;
			}
			return true;
		})
	}

	edit(id, field, value) {
		this.todos = this.todos.map(todo => {
			if (todo.id === id) {
				todo[field] = value;
			}

			return todo;
		})
	}

	create(text) {
		const id = Date.now();
		this.todos.push({id: id, name: text, status: 1, isEditing: false});
	}

	destroy(id) {
		this.todos = this.todos.filter((todo) => todo.id !== id);
	}

	getAll() {
		return this.todos;
	}

	emitChange() {
		this.emit('change');
	}

	addChangeListener(callback) {
		this.on('change', callback);
	}

	removeChangeListener(callback) {
		this.removeListener('change', callback);
	}
}

export default new TodoStore();