import App from 'cerebral'
import DevToolsFactory from 'cerebral/devtools'
import sequences from './sequences'

export const app = App({
  state:     {
    tasks:       [],
    newTaskText: ''
  },
  sequences: sequences,
}, {
  devtools: DevToolsFactory({
    host: 'localhost:3001'
  })
})