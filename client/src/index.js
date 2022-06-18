import React from 'react'
import{ BrowserRouter as Router} from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import App from './component/App'
import css from './css/style.css'

const root = createRoot(document.getElementById("app"))
root.render(<Router><App /></Router>)

