import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom'; 
import router from './routers/router.jsx'; 
import './index.css';
import { store } from './app/store'
import { Provider } from 'react-redux'
import 'sweetalert2/dist/sweetalert2.js'

createRoot(document.getElementById('root')).render(
   <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>,
);
