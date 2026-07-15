import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Service } from "./pages/Service";
import { Contact } from "./pages/Contact";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Error } from "./components/Error";
import { Logout } from "./pages/Logout";
import { AdminNavbar } from "./components/Layouts/AdminNavbar";
import { AdminUsers } from "./components/Layouts/AdminUsers";

import { AdminContacts } from "./components/Layouts/AdminContacts";
import { AdminUpdate } from "./components/Layouts/AdminUpdate";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<Error />} />
          <Route path="/admin" element={<AdminNavbar />}>
            <Route path="users" element={<AdminUsers />} />
            <Route path="users/edit/:id" element={<AdminUpdate />} />
            <Route path="contacts" element={<AdminContacts />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
