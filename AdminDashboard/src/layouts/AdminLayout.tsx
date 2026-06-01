import { NavLink, Outlet } from "react-router-dom";
import "./styles/AdminLayout.css"

function AdminLayout() {
  return (
    <div className="admin-layout">
      <aside className="sidebar">
        <h2 className="logo">Admin Panel</h2>

        <nav className="sidebar-nav">
          <NavLink
            to="/admin"
            end
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/admin/users"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Users
          </NavLink>

          <NavLink
            to="/admin/orders"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Orders
          </NavLink>
        </nav>
      </aside>

      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}

export default AdminLayout;