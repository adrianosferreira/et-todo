import App, { state } from 'cerebral'
import DevToolsFactory from 'cerebral/devtools'
import sequences from './sequences'

export const app = App({
  state:     {
    tasks:       {},
    newTaskText: '',
    active:      get => Object.values(get(state`tasks`)).filter(task => task.status),
    inactive:    get => Object.values(get(state`tasks`)).filter(task => !task.status),
    all:         get => get(state`tasks`),
  },
  sequences: sequences,
}, {
  devtools: DevToolsFactory({
    host: 'localhost:3001'
  })
})