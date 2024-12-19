import { createBrowserRouter, RouterProvider } from "react-router";
import Homepage from "../../views/homepage";
import Register from "../../views/register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
