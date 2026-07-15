import { useEffect, useState } from "react";
import { useAuth } from "../../ContextAPI/auth";
import { toast } from "react-toastify";

export const AdminContacts = () => {
  const { authorizationToken } = useAuth();
  const [contacts, setContacts] = useState([]);
  const allContacts = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/admin/contacts", {
        method: "GET",
        headers: {
          authorization: authorizationToken,
        },
      });
      const contactData = await response.json();
      setContacts(contactData);
      console.log("contact data ", contactData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    allContacts();
  }, []);

  //delet contact logic
  const deletedContact = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/admin/contacts/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            authorization: authorizationToken,
          },
        },
      );
      const delContact = await response.json();
      if (response.ok) {
        toast.success(delContact.message);
        allContacts();
      } else {
        toast.error("Not deleted");
      }
      console.log("deletd contact", delContact);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="container-fluid mt-4">
        <div className="card bg-dark text-white border-secondary shadow">
          <div className="card-header">
            <h3 className="mb-0">All Contacts</h3>
          </div>

          <div className="card-body p-0">
            <table className="table table-dark table-hover mb-0 align-middle text-center">
              <thead className="table-secondary text-dark">
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Message</th>

                  <th>Delete</th>
                </tr>
              </thead>

              <tbody>
                {contacts.map((contact, index) => (
                  <tr key={contact._id}>
                    <td>{index + 1}</td>
                    <td>{contact.username}</td>
                    <td>{contact.email}</td>
                    <td>{contact.message}</td>

                    <td>
                      <button
                        onClick={() => deletedContact(contact._id)}
                        className="btn btn-outline-danger btn-sm px-3"
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
