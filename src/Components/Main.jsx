import ReactDOM from "react-dom/client";
import './css/index.css'
import Body from "./Body.jsx";
import Header from "./Header.jsx";
import ErrorComponent from "./Error.jsx";
import Imagedata from "./ImageData.jsx";
import Cards from "./Cards.jsx";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const Main = () => {
  return (
    <>

      <Header />

      <Outlet />
    </>
  )
}

const appLayout = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/resid/:id",
        element: <Cards />
      }
    ],
    errorElement: <ErrorComponent />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(

  <RouterProvider router={appLayout} />

)
export default Main