import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import {Provider} from 'react-redux';
import store from './redux/store';
import router from './routes/router.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Provider store={store}>
    <RouterProvider router={router}>
      <App/>
    </RouterProvider>
    </Provider>
  </React.StrictMode>,
)
