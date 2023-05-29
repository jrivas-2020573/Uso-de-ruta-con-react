import React from 'react'
import ReactDOM from 'react-dom/client'
import { MainApp } from './useContext/mainApp'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <MainApp/>
  </BrowserRouter>
)
