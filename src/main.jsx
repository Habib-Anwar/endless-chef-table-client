import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './layouts/Main';
import Home from './components/Home';
import Blog from './components/Blog';
import Login from './components/Login';
import ChefTable from './components/ChefTable';
import Register from './components/Register';
import AuthProvider from './providers/AuthProvider';
import ChefInfo from './components/ChefInfo';
import ChefRecipes from './components/ChefRecipes';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/',
        element:<ChefTable></ChefTable>
      },
      // {
      //   path: '/chefinfo/:id',
      //   element: <ChefInfo></ChefInfo>
      //   loader: ({params}) => fetch('')
      // },
      {
        path: '/blog',
        element: <Blog></Blog>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/chefrecipes',
        element: <ChefRecipes></ChefRecipes>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router}></RouterProvider></AuthProvider>
  </React.StrictMode>,
)
