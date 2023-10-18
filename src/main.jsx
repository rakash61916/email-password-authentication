import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/home/Home.jsx'
import LogIn from './components/login/LogIn.jsx'
import SignUp from './components/signup/SignUp.jsx'
import UserProviderByContext from './components/context/UserProviderByContext'
import SignUpWithContextAPI from './components/signup2/SignUpWithContextAPI'

const navBar = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/login',
        element: <LogIn></LogIn>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path:'/signup2',
        element: <SignUpWithContextAPI></SignUpWithContextAPI>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProviderByContext> {/*parent*/}
      <RouterProvider router={navBar} /> {/*children*/}
    </UserProviderByContext>
  </React.StrictMode>,
)
