import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import { CardView } from './pages/cardView';
import { Home } from './pages/Home';

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/cards",
    element: <CardView/>,
  },
]);
