import { Link } from "react-router-dom";

// import React from 'react'
// Link
function Navbar() {
return (
  <nav className="nav">
    <Link to="/" className="site-title">
      Kavlium
    </Link>
    <ul>
      <Link to="/contacts">Contacts</Link>
      <Link to="/registration-form">Registration Form</Link>
    </ul>
  </nav>
);
}

export default Navbar