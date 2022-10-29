import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import { Home } from './pages/Home';

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/cards",
    element: <h1>page cards</h1>,
  },
]);
