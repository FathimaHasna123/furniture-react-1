import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


import App from './App.jsx'
import HomePage from './pages/HomePage.jsx'
import ShopPage from './pages/ShopPage.jsx'
import CartPage from './pages/CartPage.jsx'
import BlogPage from './pages/BlogPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import WishlistPage from './pages/WishlistPage.jsx'
import UserPage from './pages/UserPage.jsx'





const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path:'/shop',
        element:<ShopPage/>
      },
      {
        path:'/cart',
        element:<CartPage/>
      },
      {
        path:'/blog',
        element:<BlogPage/>
      },
      {
        path:'/contact',
        element:<ContactPage/>
      },
      {
        path:'/wishlist',
        element:<WishlistPage/>
      },
      {
        path:'/user',
        element:<UserPage/>
      }
     
    ]
  }
])


const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
)

