import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Browse from "./Browse"
import Login from "./Login"
import Header from "./Header"

const Body = () => {

const appRouter = createBrowserRouter([

  {
    path:"/",
    element : <Login></Login>
  },

  {
    path:"/browse",
    element : <Browse></Browse>
  },

  
])

  return (
   <div>
      <Header></Header>
     <RouterProvider router={appRouter}  ></RouterProvider>
   </div>
  )
}

export default Body