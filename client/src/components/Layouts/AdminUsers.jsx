import { useEffect, useState } from "react";
import { useAuth } from "../../ContextAPI/auth";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
export const AdminUsers = () => {
  const navigate = useNavigate();
  const { authorizationToken } = useAuth();
  const [users, setUsers] = useState([]);
  const getAllUsersData = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/admin/users", {
        method: "GET",
        headers: { Authorization: authorizationToken },
      });
      const data = await response.json();

      if (!response.ok) {
        setUsers([]);
        toast.error(data.message || "Unauthorized User is not an admin");
        navigate("/");
        return;
      }

      setUsers(data);
    } catch (error) {
      console.log("err", error);
    }
  };
  useEffect(() => {
    getAllUsersData();
  }, []);
  //delete btn
  const DeleteUser = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/admin/users/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: authorizationToken,
          },
        },
      );
      const delUser = await response.json();
      if (response.ok) {
        toast.success(delUser.message);
        getAllUsersData();
      }
      console.log("after delete", delUser);
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };
  return (
    <>
      <div className="container-fluid mt-4">
        <div className="card bg-dark text-white border-secondary shadow">
          <div className="card-header">
            <h3 className="mb-0">All Users</h3>
          </div>

          <div className="card-body p-0">
            <table className="table table-dark table-hover mb-0 align-middle text-center">
              <thead className="table-secondary text-dark">
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
              </thead>

              <tbody>
                {users.map((user, index) => (
                  <tr key={user._id}>
                    <td>{index + 1}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>

                    <td>
                      <Link
                        to={`/admin/users/edit/${user._id}`}
                        className="btn btn-outline-warning btn-sm px-3"
                      >
                        Edit
                      </Link>
                    </td>

                    <td>
                      <button
                        className="btn btn-outline-danger btn-sm px-3"
                        onClick={() => DeleteUser(user._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
