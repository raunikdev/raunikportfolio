import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import{ createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css';
import App from './App.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';

const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  children: [
    {
      path:'projects',
      element: <Projects/>
    }
  ]
},{
  path: '/About',
  element: <About />
},{
  path: '/Projects',
  element: <Projects />
}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
