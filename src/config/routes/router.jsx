import { createBrowserRouter, RouterProvider } from "react-router";
import Homepage from "@/views/homepage";
import LoginPage from "@/views/login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
