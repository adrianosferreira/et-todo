import { state } from 'cerebral'

const sequences = {
  addTask: [
    ({ store, props }) => {
      store.set(state`tasks.${Date.now()}`, {
        id:     Date.now(),
        name:   props.newText,
        status: 1
      })
    },
    ({store, props}) => store.set(state`currentText`, '')
  ],
  removeTask:      ({ store, props }) => store.unset(state`tasks.${props.id}`),
  changeTaskField: ({ store, props }) => store.set(state`tasks.${props.id}.${props.field}`, props.value),
  changeCurrentText: ({store, props}) => store.set(state`currentText`, props.value)
}

export default sequences