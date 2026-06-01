import AdminLayout from "../layouts/AdminLayout";
import Dashboard from "../pages/dashboard";
import Orders from "../pages/orders";
import Users from "../pages/users";

export const routes = [
  {
    path: "",
    element: <Dashboard />,
  },
  {
    path: "orders",
    element: <Orders />,
  },
  {
    path: "users",
    element: <Users />,
  },

];