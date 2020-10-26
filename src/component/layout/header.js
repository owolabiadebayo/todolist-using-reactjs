import React from "react";
import { Link } from 'react-router-dom';


function Header() {
  return (
    <header
      style={{ textAlign: "center", background: "#fff000", padding: "5px" }}
    >
      <h1>Todolist</h1>
      <Link style={linkstyle} to = '/'>Home</Link>| <Link to = '/About'>About</Link>
    </header>
  );
}
const linkstyle = {
  textDecoration: "none"
}

export default Header;
