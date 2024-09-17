import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route,RouterProvider,createBrowserRouter,createRoutesFromElements } from 'react-router-dom'
import Home, { brandLoader } from './components/Home.jsx'
import Collections from './components/Collections.jsx'
import Contact from './components/Contact.jsx'
import AddToCart from './components/AddToCart.jsx'

const router=createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<App/>}> 
  <Route loader={brandLoader}  path='' element={<Home/>} />
  <Route path='Collections' element={<Collections/>}/>
  <Route path='Contact' element={<Contact/>}/>
  <Route path='AddToCart' element={<AddToCart/>}/>
  </Route>
))

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}/>
  </StrictMode>,
)
