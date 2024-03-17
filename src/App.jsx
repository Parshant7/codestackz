import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './components/root/root'
import Home from './pages/Home'
import Contactus from './pages/Contactus'
import './App.css'
import Aboutus from './pages/Aboutus'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/contactus",
        element: <Contactus />
      },
      {
        path:"/aboutus",
        element: <Aboutus/>
      }
    ]
  }
])

function App() {

  return (
    <>
      <div style={{ overflow: "hidden" }}>
        <RouterProvider router={router} />

      </div>

    </>
  )
}

export default App
