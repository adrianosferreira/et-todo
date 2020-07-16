import { state, } from 'cerebral'

const sequences = {
  addTask:         ({ store, props }) => {
    store.set(state`tasks.${Date.now()}`, {
      id:     Date.now(),
      name:   props.newText,
      status: 1
    })
  },
  removeTask:      ({ store, props }) => store.unset(state`tasks.${props.id}`),
  changeTaskField: ({ store, props }) => store.set(state`tasks.${props.id}.${props.field}`, props.value)
}

export default sequences