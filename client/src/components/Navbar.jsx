import { NavLink } from "react-router-dom";
import { useAuth } from "../ContextAPI/auth";
export const Navbar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <div className="container">
        <header>
          <nav className="navbar navbar-expand-lg my-3">
            <div className="container-fluid">
              <NavLink className=" nav-link" to="/">
                Shaban Rasheed
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-theme="dark"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto ">
                  <li className="nav-item">
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "nav-link active-link" : "nav-link"
                      }
                      aria-current="page"
                      to="/"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item mx-2">
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "nav-link active-link" : "nav-link"
                      }
                      to="/about"
                    >
                      About
                    </NavLink>
                  </li>
                  <li className="nav-item  mx-2">
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "nav-link active-link" : "nav-link"
                      }
                      to="/service"
                    >
                      Service
                    </NavLink>
                  </li>
                  <li className="nav-item  mx-2">
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "nav-link active-link" : "nav-link"
                      }
                      to="/contact"
                    >
                      Contact
                    </NavLink>
                  </li>
                  {isLoggedIn ? (
                    <li className="nav-item mx-2">
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? "nav-link active-link" : "nav-link"
                        }
                        to="/logout"
                      >
                        Logout
                      </NavLink>
                    </li>
                  ) : (
                    <>
                      <li className="nav-item mx-2">
                        <NavLink
                          className={({ isActive }) =>
                            isActive ? "nav-link active-link" : "nav-link"
                          }
                          to="/login"
                        >
                          Login
                        </NavLink>
                      </li>

                      <li className="nav-item ">
                        <NavLink
                          className={({ isActive }) =>
                            isActive ? "nav-link active-link" : "nav-link"
                          }
                          to="/register"
                        >
                          Register
                        </NavLink>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
};
