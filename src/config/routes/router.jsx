import { createBrowserRouter, RouterProvider } from "react-router";
import Homepage from "../../views/homepage";
import Login from "@/views/auth/login";
import Dashboard from "@/views/dashboard";
import Register from "@/views/auth/register";
import DocumentView from "@/views/document";
import ProtectedRoutes from "@/components/protectedRoutes";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: <ProtectedRoutes><Dashboard /></ProtectedRoutes>,
  },
  {
    path: "/document",
    element: <ProtectedRoutes><DocumentView /></ProtectedRoutes>,
  }
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
