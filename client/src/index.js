import React from 'react'
import{ BrowserRouter as Router} from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import App from './component/App'
import css from './css/style.css'
import {ContextProvider} from './Context'
import ScrollToTop from '../src/component/ScrollToTop'

const root = createRoot(document.getElementById("app"))
root.render(
  <ContextProvider>
    <Router>
      <ScrollToTop />
      <App />
    </Router>
  </ContextProvider>
)

