import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { Login } from './page/Login.jsx';

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login/>
  },
  {
    path:"/",
    element:<App/>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>

    <App />
    </RouterProvider>
  </StrictMode>
)
