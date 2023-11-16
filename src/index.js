import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Home } from './components/Home';
import { Shop } from './components/Shop';
import About from './components/About';
import { Error } from './components/Error';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/shop",
    element: <Shop/>
  },
  {
    path: "/about",
    element: <About/>
  },
  {
    path: "*",
    element: <Error/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

// React Router DOM

root.render(
  <React.StrictMode>
    <App/>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
