import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import KROOZ from './krooz.jsx'
import { RouterProvider, BrowserRouter, createBrowserRouter } from 'react-router-dom'

const routers = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/krooz',
    element: <KROOZ />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={routers} />
)
