import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Root from './Components/Root/Root';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import AddCoffe from './Components/AddUsers/AddCoffe';
import UpdateCoffee from './Components/UpdateCoffee/UpdateCoffee';

import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import AuthProvider from './AuthProvider/AuthProvider';
import User from './Users/User';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import UpdateUser from './Users/UpdateUser';
import ViewCoffeeDetails from './Components/ViewCoffeeDetails/ViewCoffeeDetails';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/add-coffee',
        element: <AddCoffe></AddCoffe>,
      },
      {
        path: '/update-coffee/:id',
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) =>
          fetch(
            `https://coffee-store-server-pi-three.vercel.app/coffee/${params.id}`
          ),
      },
      {
        path: '/login',
        element: <Login></Login>,
        loader: () =>
          fetch(`https://coffee-store-server-pi-three.vercel.app/users`),
      },
      {
        path: '/register',
        element: <Register></Register>,
        loader: () =>
          fetch('https://coffee-store-server-pi-three.vercel.app/users'),
      },
      {
        path: '/users',
        element: <User></User>,
      },
      {
        path: '/update-user/:id',
        element: <UpdateUser></UpdateUser>,
      },
      {
        path: '/coffee/:id',
        element: <ViewCoffeeDetails></ViewCoffeeDetails>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
