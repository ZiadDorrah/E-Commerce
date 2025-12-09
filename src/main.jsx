import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./routes/RootLayout";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Provider } from "react-redux";
import { store } from "./store/store";
import "./index.css";
import Home from "./routes/Home";
import NotFound from "./components/NotFound";
import DashboardRootLayout from "./routes/DashboardRootLayout";
import Dashboard from "./Dashboard/Dashboard";
import Reports from './Dashboard/Reports';
import Users from './Dashboard/Users';
import Orders from './Dashboard/Orders';
import Products from './Dashboard/Products';
import Settings from './Dashboard/Settings';
import Logout from './Dashboard/Logout';
import Signin from "./routes/Auth/Signin";
import AdminLogin from "./routes/Auth/AdminLogin";
import Signup from "./routes/Auth/Signup";
import ProtectedRoute from "./components/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Signin />,
  },
  {
    path: '/adminLogin',
    element: <AdminLogin />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: "/",
    element: <ProtectedRoute> <RootLayout /></ProtectedRoute>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardRootLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "products", element: <Products /> },
      { path: "orders", element: <Orders /> },
      { path: "users", element: <Users /> },
      { path: "reports", element: <Reports /> },
      { path: "settings", element: <Settings /> },
      { path: "logout", element: <Logout /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
