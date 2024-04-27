import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import UserHome from './Pages/User/UserHome.jsx'
import Signup from './Pages/User/SignUp.jsx'
import Login from './Pages/User/Login.jsx'
import Shop from './Pages/Product/Shop.jsx'
import ListItems from './Pages/User/ListItems'
import Profile from './Pages/User/Profile.jsx'
import Verified from './Pages/verified'
import ViewUsers from './Pages/Admin/viewUsers'
import Paintings from './Pages/Product/Paintings.jsx'
import Sculptures from './Pages/Product/Sculptures.jsx'
import Photos from './Pages/Product/Photos.jsx'
import Drawings from './Pages/Product/Drawings.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
const router = createBrowserRouter([
  {
    path: '/',
    element: <UserHome/>
  },
  {
    path: '/register',
    element: <Signup/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/shop',
    element: <Shop/>
  },
  {
    path: '/listitem',
    element: <ListItems/>    
  },
  {
    path: 'user/profile',
    element: <Profile/>
  
  },
  {
    path: '/:userId/verify/:token',
    element: <Verified/>
  },
  {
    path: '/admin/viewusers',
    element: <ViewUsers/>
  },
  {
    path:'/shop/paintings',
    element: <Paintings/>
  },
  {
    path:'/shop/sculptures',
    element: <Sculptures/>
  },
  {
    path:'/shop/photography',
    element: <Photos/>
  },
  {
    path:'/shop/drawings',
    element: <Drawings/>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>    
  </React.StrictMode>,
)
