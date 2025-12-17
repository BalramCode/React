// Routing : It is the process of navigating between different pages or views in a web application. It decides which content to show based on the current URL (address) in the browser.


// Import global styles
import './App.css'

// Import required components from React Router DOM
import { createBrowserRouter, RouterProvider } from "react-router-dom"

// Import React components used in routing
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Params from './components/Params'
import Courses from './components/Courses'
import Report from './components/Report'
import NotFound from './components/NotFound'

// Create a router using React Router's `createBrowserRouter`
// This defines all routes in your application
const router = createBrowserRouter([

  // Route for the home page
  {
    path: "/",  // URL path: http://localhost:3000/
    element: (
      <div>
        <Navbar />   {/* Common navigation bar */}
        <Home />     {/* Home component rendered for root path */}
      </div>
    )
  },

  // Route for the About page
  {
    path: "/about",  // URL path: /about
    element: (
      <div>
        <Navbar />
        <About />
      </div>
    )
  },

  // Route for the Contact page, with nested child routes
  {
    path: "/contact",  // URL path: /contact
    element: (
      <div>
        <Navbar />
        <Contact />
      </div>
    ),
    children: [
      {
        path: 'courses',     // URL: /contact/courses
        element: <Courses /> // Courses component will be rendered inside <Contact />
      },
      {
        path: 'report',      // URL: /contact/report
        element: <Report />  // Report component rendered inside <Contact />
      }
    ]
  },

  // Route with a dynamic parameter `id`
  {
    path: "/student/:id",  // URL example: /student/123
    element: (
      <div>
        <Navbar />
         <Params />  {/* Params will use useParams() to access the `id` from the URL */}
      </div>
    )
  },

  // Catch-all route for undefined paths (404 page)
  {
    path: "*",  // Matches anything not previously defined
    element: <NotFound /> // Custom 404 page
  }
])

// Main App component
function App() {
  return (
    <div>
      {/* Provide the router to the entire app */}
      <RouterProvider router={router} />
    </div>
  )
}

// Export App so it can be rendered by React
export default App
