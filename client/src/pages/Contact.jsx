import { useEffect, useState } from "react";
import { useAuth } from "../ContextAPI/auth";
import { useNavigate } from "react-router-dom";

export const Contact = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: "",
  });
  useEffect(() => {
    if (user) {
      setContact((prev) => ({
        ...prev,
        username: user.username,
        email: user.email,
        password: "",
      }));
    }
  }, [user]);
  //input changing tackel
  const handleinputChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setContact({
      ...contact,
      [name]: value,
    });
  };

  //form submit
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/form/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });
      if (response.ok) {
        const data = await response.json();
        setContact({
          username: "",
          email: "",
          message: "",
        });
        navigate("/");
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1>Contact Us</h1>
            <img
              src="/images/contact.png"
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
                  value={contact.username}
                  onChange={handleinputChange}
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
                  value={contact.email}
                  onChange={handleinputChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label text-white">
                  message:
                </label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  className="form-control"
                  value={contact.message}
                  onChange={handleinputChange}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-color">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <section className="my-3">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.805064724!2d74.31772507540514!3d31.502041574222282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190470fee09a0b%3A0x4d99905ad4fc73b4!2sGarden%20Town%20Park%20(Jevan%20Hana)!5e0!3m2!1sen!2s!4v1783732736452!5m2!1sen!2s"
          width="100%"
          height="450"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </section>
    </>
  );
};
