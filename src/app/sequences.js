import { state } from 'cerebral'

const sequences = {
  addTask: ({ store, props }) => {
    store.push(state`tasks`, {
      id:     Date.now(),
      name:   props.newText,
      status: 1
    })
  },
  removeTask: ({ store, get, props }) => store.set(state`tasks`, get(state`tasks`).filter(task => task.id !== props.id)),
  changeTaskField: ({ store, get, props }) => {
    store.set(state`tasks`, get(state`tasks`).map(task => {
      if (task.id === props.id) {
        task[props.field] = props.value
      }

      return task
    }))
  },

}

export default sequences