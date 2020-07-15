class Dispatcher {
	constructor() {
		this.callbacks = [];
		this.promises = [];
	}

	register(callback) {
		this.callbacks.push(callback);
		return this.callbacks.length - 1;
	}

	dispatch(payload) {
		const resolves = [];
		const rejects = [];

		this.promises = this.callbacks.map((_, i) => {
			return new Promise((resolve, reject) => {
				resolves[i] = resolve;
				rejects[i] = reject;
			})
		});

		this.callbacks.forEach((callback, i) => {
			Promise.resolve(callback(payload)).then(() => {
				resolves[i](payload);
			}, function () {
				rejects[i](new Error('Dispatcher callback unsuccessful'));
			});
		});
		this.promises = [];
	}
}

export default Dispatcher;