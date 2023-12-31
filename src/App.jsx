import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './layout/RootLayout'

import About from "./pages/About"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import SingleImage from './pages/SingleImage'

function App() {

  const roots = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "Contact",
          element: <Contact />
        },
        {
          path: "about",
          element: <About />
        },
        {
          path: 'singlepage/:id',
          element: <SingleImage/>

        }
      ]
    }
  ])

  return <RouterProvider router={roots} />
}

export default App 