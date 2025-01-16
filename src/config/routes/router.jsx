import { createBrowserRouter, RouterProvider } from "react-router";
import ProtectedRoutes from "@/components/guard/protectedRoutes";
import Homepage from "@/views/homepage";
import LoginPage from "@/views/login";
import Dashboard from "@/views/dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/dashboard",
    element: <ProtectedRoutes><Dashboard /></ProtectedRoutes>,
  }
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
