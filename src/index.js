import React from 'react'
import ReactDOM from 'react-dom'
import TodoApp from './components/TodoApp'
import { Container } from '@cerebral/react'
import { app } from './app'

ReactDOM.render(<Container app={app}>
  <TodoApp/>
</Container>, document.getElementById('root'))
