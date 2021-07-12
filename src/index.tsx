import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Container } from '@material-ui/core'

ReactDOM.render(
  <React.StrictMode>
    <Container maxWidth="xl">
      <App />
    </Container>
  </React.StrictMode>,
  document.getElementById('root')
)
