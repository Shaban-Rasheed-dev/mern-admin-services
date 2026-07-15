import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import { useAuth } from "../../ContextAPI/auth";
import { FaHome } from "react-icons/fa";

export const AdminNavbar = () => {
  const { user, isLoading } = useAuth();
  const navigate = useNavigate();
  console.log("user isAdmin", user);

  if (isLoading) return <div>Loading...</div>;

  if (!user.isAdmin) return navigate("/");
  return (
    <>
      <header>
        <nav>
          <div className="container-fluid">
            <div className="row">
              {/* Sidebar */}
              <div className="col-md-3 col-lg-2 bg-dark text-white min-vh-100 p-0">
                <div className="p-3 border-bottom">
                  <h4 className="text-center">Admin Panel</h4>
                </div>

                <ul className="nav flex-column mt-3">
                  <li className="nav-item">
                    <NavLink to="/admin/users" className="nav-link text-white">
                      <HiUsers /> Users
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink
                      to="/admin/contacts"
                      className="nav-link text-white"
                    >
                      <FaPhoneAlt /> Contacts
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink to="/" className="nav-link text-white">
                      <FaHome /> Home
                    </NavLink>
                  </li>
                </ul>
              </div>

              {/* Main Content */}
              <div className="col-md-9 col-lg-10 p-0">
                {/* Top Navbar */}
                <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm px-4">
                  <span className="navbar-brand fw-bold">Admin Dashboard</span>
                </nav>

                {/* Content */}
                <div className="p-4">
                  <h2>Welcome Admin 👋</h2>
                  <p>Your content will appear here.</p>
                  <Outlet />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
