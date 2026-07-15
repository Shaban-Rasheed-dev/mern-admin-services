import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../ContextAPI/auth";
import { toast } from "react-toastify";
export const Register = () => {
  const { storeTokenInLS } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  // tackel the input handling
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setForm({
      ...form,
      [name]: value,
    });
  };

  //   form submit logic
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      // console.log("data", data.message);
      console.log("data", data.extraDetails);

      if (response.ok) {
        storeTokenInLS(data.token);
        setForm({
          username: "",
          email: "",
          phone: "",
          password: "",
        });
        toast.success(data.message);
        navigate("/login");
      } else {
        toast.error(data.extraDetails ? data.extraDetails : data.message);
      }
      console.log(response);
    } catch (error) {
      console.log("register error", error);
    }
  };
  return (
    <>
      <div className="container">
        <div className="row footer-margin mt-5">
          <div className="col-md-6">
            <img
              src="/images/register.png"
              alt="Register"
              className="img-fluid"
              width="400"
            />
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-4">
            <form onSubmit={handleFormSubmit}>
              <div className="mb-3">
                <label htmlFor="username" className="form-label text-white">
                  username:
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="enter your name..."
                  name="username"
                  id="username"
                  required
                  autoComplete="off"
                  value={form.username}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label text-white">
                  Email:
                </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="enter your email..."
                  name="email"
                  id="email"
                  required
                  autoComplete="off"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label text-white">
                  Phone:
                </label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="enter your phone..."
                  name="phone"
                  id="phone"
                  required
                  autoComplete="off"
                  value={form.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label text-white">
                  Password:
                </label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  id="password"
                  placeholder="enter your password..."
                  required
                  autoComplete="off"
                  value={form.password}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="btn btn-color">
                Register Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
