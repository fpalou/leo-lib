import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

/* My routes */
import Root from "./routes/root";
import ErrorPage from "./routes/error-page";
import Library from "./routes/library";
/* My stylesheets */
import './assets/stylesheets/index.scss'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,

  },
  {
    path: "/library",
    element: <Library />,
    errorElement: <ErrorPage />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
