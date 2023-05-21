import { createBrowserRouter, Navigate } from 'react-router-dom'
import Singup from './views/Singup'
import Users from './views/Users'
import Login from './views/Login'
import NotFound from './views/NotFound'
import DefaultLayout from './components/DefaultLayout'
import GuestLayout from './components/GuestLayout'
import Dashboard from './views/Dashboard'
import Surveys from './views/Surveys'
import SurveyView from './views/SurveyView'

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/dashboard',
        element: <Navigate to="/" />,
      },
      {
        path: '/surveys',
        element: <Surveys />,
      },
      {
        path: '/surveys/create',
        element: <SurveyView />,
      },
      {
        path: '/',
        element: <Dashboard />,
      },
      {
        path: '/users',
        element: <Users />,
      },
    ],
  },
  {
    path: '/',
    element: <GuestLayout />,
    children: [
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/singup',
        element: <Singup />,
      },
    ],
  },

  {
    path: '*',
    element: <NotFound />,
  },
])

export default router
