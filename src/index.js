import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorElement from './Pages/ErrorElement';
import HomePage from './Pages/HomePage';
import CollectionPage from './Pages/CollectionPage';
import PdpPage from './Pages/PdpPage';
import CardPage from './Pages/CardPage';
const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App />,
    errorElement:<ErrorElement />,
    children:[
      {
        path:"/",
        element:<HomePage />,
      },
      {
        path:"/collection",
        element:<CollectionPage />,
      },
      {
        path:"/pdp",
        element:<PdpPage />,
      },
      {
        path:"/card",
        element:<CardPage />,
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter}/>
  </React.StrictMode>
);


