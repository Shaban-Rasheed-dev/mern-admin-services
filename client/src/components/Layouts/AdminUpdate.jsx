import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../ContextAPI/auth";
import { toast } from "react-toastify";

export const AdminUpdate = () => {
  const navigate = useNavigate();
  const params = useParams();
  console.log("params id", params);
  const { authorizationToken } = useAuth();
  const [data, setData] = useState({
    username: "",
    email: "",
    phone: "",
  });

  const singUserData = async () => {
    const response = await fetch(
      `http://localhost:3000/api/admin/users/edit/${params.id}`,
      {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      },
    );
    const updateData = await response.json();
    setData(updateData);
    // console.log("edit data", updateData);
  };
  useEffect(() => {
    singUserData();
  }, []);
  const handleInputChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    console.log(value);
    console.log(name);

    setData({
      ...data,
      [name]: value,
    });
  };
  //update logic
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:3000/api/admin/users/update/${params.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: authorizationToken,
          },
          body: JSON.stringify(data),
        },
      );
      const updateData = await response.json();
      if (response.ok) {
        setData({
          username: "",
          email: "",
          phone: "",
        });
        toast.success(updateData.message);
        navigate("/admin/users");
      }
      console.log("update data", updateData);
    } catch (error) {
      toast.error(error.message);
      // console.log(error);
    }
  };
  return (
    <div className="container">
      <div className="row footer-margin mt-5">
        <div className="col-md-3"></div>
        <div className="col-md-6">
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
                value={data.username}
                onChange={handleInputChange}
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
                value={data.email}
                onChange={handleInputChange}
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
                value={data.phone}
                onChange={handleInputChange}
              />
            </div>

            <button type="submit" className="btn btn-color">
              Update User
            </button>
          </form>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};
