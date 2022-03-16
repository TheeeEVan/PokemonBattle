// main.jsx - initilizes react and renders app on page
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// this is where all of our code gets imported
import App from './App'

// render the app on the div with this id 'root'
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
